import { apply, Frequency, from, octaveReduce, powerSet, reduce, Scalar, to } from '@musical-patterns/utilities'
import { YER_FACTORS } from './constants'
import { Yer, YerPitchClass } from './types'

const buildYer: () => Yer[] =
    (): Yer[] =>
        powerSet(YER_FACTORS)
            .map((subset: Array<Scalar<Frequency>>): Yer => {
                let pitchClassRaw: string = reduce(
                    subset,
                    (accumulator: string, factor: Scalar<Frequency>): string =>
                        `${accumulator}_${factor}`,
                    '',
                )
                pitchClassRaw = pitchClassRaw || '_1'
                const pitchClass: YerPitchClass = YerPitchClass[ pitchClassRaw as YerPitchClass ]

                const scalar: Scalar<Frequency> = reduce(
                    subset,
                    (accumulator: Scalar<Frequency>, factor: Scalar<Frequency>): Scalar<Frequency> =>
                        apply.Scalar(accumulator, factor),
                    to.Scalar(to.Frequency(1)),
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
