import {
    entries,
    forEach,
    Frequency,
    indexOfLastElement,
    isUndefined,
    Ordinal,
    reduce,
    Scalar,
} from '@musical-patterns/utilities'
import { YER_FACTORS } from './constants'
import {
    isNotYerPitchClassByFactorizationLeaf,
    yerScalarByFactor,
} from './helpers'
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
                    forEach(YER_FACTORS, (factor: Scalar<Frequency>, index: Ordinal) => {
                        const key: string = yer.subset.includes(factor)
                            .toString()
                        if (isUndefined(cursor[ key ])) {
                            cursor[ key ] = index === indexOfLastElement(YER_FACTORS) ? yer.pitchClass : {}
                        }
                        const node: YerPitchClassByFactorizationCursor | YerPitchClass = cursor[ key ]
                        if (isNotYerPitchClassByFactorizationLeaf(node)) {
                            cursor = node
                        }
                    })

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
                entries(yerScalarByFactor)
                    .forEach(([ factor, scalar ]: [ YerFactor, Scalar<Frequency> ]) => {
                        if (yer.subset.includes(scalar)) {
                            factorization[ factor ] = true
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
