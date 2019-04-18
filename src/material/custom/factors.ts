import {
    entries,
    forEach,
    Frequency,
    indexOfFinalElement,
    isUndefined,
    Multiple,
    objectSet,
    Ordinal,
    reduce,
    Scalar,
} from '@musical-patterns/utilities'
import { YER_FACTORS } from './constants'
import { isNotYerPitchClassByFactorizationLeaf, yerMultipleByFactor } from './helpers'
import {
    Yer,
    YerFactor,
    YerFactorization,
    YerFactorizationByPitchClass,
    YerPitchClass,
    YerPitchClassByFactorization,
    YerPitchClassByFactorizationCursor,
} from './types'
import { computeYer } from './yer'

const pitchClassByFactorization: () => YerPitchClassByFactorization =
    (): YerPitchClassByFactorization =>
        computeYer()
            .reduce<YerPitchClassByFactorization>(
                (accumulator: YerPitchClassByFactorization, yer: Yer): YerPitchClassByFactorization => {
                    let cursor: YerPitchClassByFactorizationCursor = accumulator
                    forEach(
                        YER_FACTORS,
                        (factor: Multiple<Scalar<Frequency>>, index: Ordinal<Multiple<Scalar<Frequency>>>) => {
                            const key: string = yer.subset.includes(factor)
                                .toString()
                            if (isUndefined(cursor[ key ])) {
                                objectSet(cursor, key, index === indexOfFinalElement(YER_FACTORS) ? yer.pitchClass : {})
                            }
                            const node: YerPitchClassByFactorizationCursor | YerPitchClass = cursor[ key ]
                            if (isNotYerPitchClassByFactorizationLeaf(node)) {
                                cursor = node
                            }
                        },
                    )

                    return accumulator
                },
                {},
            )

const factorizationByPitchClass: () => YerFactorizationByPitchClass =
    (): YerFactorizationByPitchClass =>
        reduce(
            computeYer(),
            (accumulator: YerFactorizationByPitchClass, yer: Yer): YerFactorizationByPitchClass => {
                const factorization: YerFactorization = {}
                entries(yerMultipleByFactor)
                    .forEach(([ factor, multiple ]: [ YerFactor, Multiple<Scalar<Frequency>> ]) => {
                        if (yer.subset.includes(multiple)) {
                            objectSet(factorization, factor, true)
                        }
                    })

                return {
                    ...accumulator,
                    [ yer.pitchClass ]: factorization,
                }
            },
            {},
        )

const computeYerFactorizationByPitchClass: (yer: YerPitchClass) => YerFactorization =
    (yer: YerPitchClass): YerFactorization =>
        factorizationByPitchClass()[ yer ]

const computeYerPitchClassByFactorization: (factors: YerFactorization) => YerPitchClass =
    (yerFactorization: YerFactorization): YerPitchClass => {
        const {
            [ YerFactor._11 ]: eleven = false,
            [ YerFactor._13 ]: thirteen = false,
            [ YerFactor._17 ]: seventeen = false,
            [ YerFactor._19 ]: nineteen = false,
        } = yerFactorization

        return pitchClassByFactorization()
            [ eleven.toString() ]
            [ thirteen.toString() ]
            [ seventeen.toString() ]
            [ nineteen.toString() ]
    }

export {
    computeYerPitchClassByFactorization,
    computeYerFactorizationByPitchClass,
}
