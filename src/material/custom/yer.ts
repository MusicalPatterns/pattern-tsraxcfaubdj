import { as, keyExistsOnObject, octaveReduce, Pitch, powerSet, reduce, Scalar, Thunk, use } from '@musical-patterns/utilities'
import { YER_FACTORS } from './constants'
import { Yer, YerMultiple, YerPitchClass } from './types'

const isYerPitchClass: (candidate: string) => candidate is YerPitchClass =
    (candidate: string): candidate is YerPitchClass =>
        keyExistsOnObject(candidate, YerPitchClass)

const thunkYer: Thunk<Yer[]> =
    (): Yer[] =>
        powerSet(YER_FACTORS)
            .map((subset: YerMultiple[]): Yer => {
                let rawPitchClass: string = reduce(
                    subset,
                    (accumulator: string, factor: YerMultiple): string =>
                        `${accumulator}_${String(factor)}`,
                    '',
                )
                rawPitchClass = rawPitchClass || '_1'
                let pitchClass: YerPitchClass
                if (isYerPitchClass(rawPitchClass)) {
                    pitchClass = rawPitchClass
                }
                else {
                    throw new Error(`malformed YerPitchClass: ${rawPitchClass}`)
                }

                const scalar: Scalar<Pitch> = reduce(
                    subset,
                    (accumulator: Scalar<Pitch>, factor: YerMultiple): Scalar<Pitch> =>
                        use.Multiple(accumulator, factor),
                    as.Scalar<Pitch>(1),
                )

                return { pitchClass, scalar, subset }
            })
            .map((yer: Yer): Yer => ({
                ...yer,
                scalar: octaveReduce(yer.scalar),
            }))
            .sort((yer: Yer, nextYer: Yer): number =>
                as.number(yer.scalar) - as.number(nextYer.scalar),
            )

export {
    thunkYer,
}
