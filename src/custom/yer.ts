import { apply, from, octaveReduce, powerSet, reduce, Scalar, to } from '@musical-patterns/utilities'
import { YER_FACTORS } from './constants'
import { Yer, YerPitchClass } from './types'

const buildYer: () => Yer[] =
    (): Yer[] =>
        powerSet(YER_FACTORS)
            .map((subset: Scalar[]): Yer => {
                let pitchClassRaw: string = reduce(
                    subset,
                    (accumulator: string, factor: Scalar): string =>
                        `${accumulator}_${factor}`,
                    '',
                )
                pitchClassRaw = pitchClassRaw || '_1'
                const pitchClass: YerPitchClass = YerPitchClass[ pitchClassRaw as YerPitchClass ]

                const scalar: Scalar = reduce(
                    subset,
                    (accumulator: Scalar, factor: Scalar): Scalar =>
                        apply.Scalar(accumulator, factor),
                    to.Scalar(1),
                )

                return { scalar, pitchClass, subset }
            })
            .map((yer: Yer) => ({
                ...yer,
                scalar: octaveReduce(yer.scalar),
            }))
            .sort((yer: Yer, nextYer: Yer) =>
                from.Scalar(yer.scalar) - from.Scalar(nextYer.scalar))

export {
    buildYer,
}
