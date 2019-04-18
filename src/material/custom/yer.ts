import {
    apply,
    Frequency,
    from,
    keyExistsOnObject,
    Multiple,
    octaveReduce,
    powerSet,
    reduce,
    Scalar,
    to,
} from '@musical-patterns/utilities'
import { YER_FACTORS } from './constants'
import { Yer, YerPitchClass } from './types'

const isYerPitchClass: (candidate: string) => candidate is YerPitchClass =
    (candidate: string): candidate is YerPitchClass =>
        keyExistsOnObject(candidate, YerPitchClass)

const computeYer: () => Yer[] =
    (): Yer[] =>
        powerSet(YER_FACTORS)
            .map((subset: Array<Multiple<Scalar<Frequency>>>): Yer => {
                let rawPitchClass: string = reduce(
                    subset,
                    (accumulator: string, factor: Multiple<Scalar<Frequency>>): string =>
                        `${accumulator}_${factor}`,
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

                const scalar: Scalar<Frequency> = reduce(
                    subset,
                    (accumulator: Scalar<Frequency>, factor: Multiple<Scalar<Frequency>>) =>
                        apply.Multiple(accumulator, factor),
                    to.Scalar<Frequency>(1),
                )

                return { pitchClass, scalar, subset }
            })
            .map((yer: Yer) => ({
                ...yer,
                scalar: octaveReduce(yer.scalar),
            }))
            .sort((yer: Yer, nextYer: Yer) =>
                from.Scalar<Frequency>(yer.scalar) - from.Scalar<Frequency>(nextYer.scalar),
            )

export {
    computeYer,
}
