import {
    entries,
    forEach,
    indexOfFinalElement,
    isUndefined,
    objectSet,
    Ordinal,
    reduce,
    Thunk,
} from '@musical-patterns/utilities'
import { YER_FACTORS } from './constants'
import { isNotYerPitchClassByFactorizationLeaf, yerMultipleByFactor } from './helpers'
import {
    Yer,
    YerFactor,
    YerFactorization,
    YerFactorizationByPitchClass,
    YerMultiple,
    YerPitchClass,
    YerPitchClassByFactorization,
    YerPitchClassByFactorizationCursor,
} from './types'
import { thunkYer } from './yer'

const thunkYerPitchClassByFactorization: Thunk<YerPitchClassByFactorization> =
    (): YerPitchClassByFactorization =>
        thunkYer()
            .reduce<YerPitchClassByFactorization>(
                (accumulator: YerPitchClassByFactorization, yer: Yer): YerPitchClassByFactorization => {
                    let cursor: YerPitchClassByFactorizationCursor = accumulator as YerPitchClassByFactorizationCursor
                    forEach(
                        YER_FACTORS,
                        (yerFactor: YerMultiple, index: Ordinal<YerMultiple[]>): void => {
                            const key: string = yer.subset.includes(yerFactor)
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

const thunkFactorizationByPitchClass: Thunk<YerFactorizationByPitchClass> =
    (): YerFactorizationByPitchClass =>
        reduce(
            thunkYer(),
            (accumulator: YerFactorizationByPitchClass, yer: Yer): YerFactorizationByPitchClass => {
                const factorization: YerFactorization = {}
                entries(yerMultipleByFactor)
                    .forEach(([ factor, multiple ]: [ YerFactor, YerMultiple ]): void => {
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
        thunkFactorizationByPitchClass()[ yer ]

const computeYerPitchClassByFactorization: (factors: YerFactorization) => YerPitchClass =
    (yerFactorization: YerFactorization): YerPitchClass => {
        const {
            [ YerFactor._11 ]: eleven = false,
            [ YerFactor._13 ]: thirteen = false,
            [ YerFactor._17 ]: seventeen = false,
            [ YerFactor._19 ]: nineteen = false,
        } = yerFactorization

        return thunkYerPitchClassByFactorization()
            [ eleven.toString() ]
            [ thirteen.toString() ]
            [ seventeen.toString() ]
            [ nineteen.toString() ]
    }

export {
    computeYerPitchClassByFactorization,
    computeYerFactorizationByPitchClass,
}
