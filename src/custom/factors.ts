import { deepClone, forEach, Ordinal, Scalar } from '@musical-patterns/utilities'
import { YER_FACTORS } from './constants'
import {
    Yer,
    YerFactor,
    YerFactorization,
    YerPitchClass,
    YerPitchClassByFactorization,
    YerPitchClassByFactorizationCursor,
} from './types'
import { buildYer } from './yer'

const pitchClassByFactorization: () => YerPitchClassByFactorization =
    (): YerPitchClassByFactorization => {
        const yerPitchClassByFactorizationAccumulator: YerPitchClassByFactorization = {}

        return buildYer()
            .reduce(
                (accumulator: YerPitchClassByFactorization, yer: Yer): YerPitchClassByFactorization => {
                    let cursor: YerPitchClassByFactorizationCursor = accumulator
                    forEach(YER_FACTORS, (factor: Scalar, index: Ordinal) => {
                        const key: string = yer.subset.includes(factor)
                            .toString()
                        if (!cursor[ key ]) {
                            cursor[ key ] = index === YER_FACTORS.length - 1 ? yer.pitchClass : {}
                        }
                        // @ts-ignore
                        cursor = cursor[ key ]
                    })

                    return accumulator
                },
                yerPitchClassByFactorizationAccumulator,
            )
    }

const factorizationByPitchClass: { [key in YerPitchClass]: YerFactorization } = {
    [ YerPitchClass._1 ]: {},
    [ YerPitchClass._11 ]: { [ YerFactor._11 ]: true },
    [ YerPitchClass._13 ]: { [ YerFactor._13 ]: true },
    [ YerPitchClass._17 ]: { [ YerFactor._17 ]: true },
    [ YerPitchClass._19 ]: { [ YerFactor._19 ]: true },
    [ YerPitchClass._11_13 ]: { [ YerFactor._11 ]: true, [ YerFactor._13 ]: true },
    [ YerPitchClass._11_17 ]: { [ YerFactor._11 ]: true, [ YerFactor._17 ]: true },
    [ YerPitchClass._11_19 ]: { [ YerFactor._11 ]: true, [ YerFactor._19 ]: true },
    [ YerPitchClass._13_17 ]: { [ YerFactor._13 ]: true, [ YerFactor._17 ]: true },
    [ YerPitchClass._13_19 ]: { [ YerFactor._13 ]: true, [ YerFactor._19 ]: true },
    [ YerPitchClass._17_19 ]: { [ YerFactor._17 ]: true, [ YerFactor._19 ]: true },
    [ YerPitchClass._11_13_17 ]: { [ YerFactor._11 ]: true, [ YerFactor._13 ]: true, [ YerFactor._17 ]: true },
    [ YerPitchClass._11_13_19 ]: { [ YerFactor._11 ]: true, [ YerFactor._13 ]: true, [ YerFactor._19 ]: true },
    [ YerPitchClass._11_17_19 ]: { [ YerFactor._11 ]: true, [ YerFactor._17 ]: true, [ YerFactor._19 ]: true },
    [ YerPitchClass._13_17_19 ]: { [ YerFactor._13 ]: true, [ YerFactor._17 ]: true, [ YerFactor._19 ]: true },
    [ YerPitchClass._11_13_17_19 ]: {
        [ YerFactor._11 ]: true,
        [ YerFactor._13 ]: true,
        [ YerFactor._17 ]: true,
        [ YerFactor._19 ]: true,
    },
}

const getYerFactorizationByPitchClass: (yer: YerPitchClass) => YerFactorization =
    (yer: YerPitchClass): YerFactorization =>
        deepClone(factorizationByPitchClass[ yer ])

const getYerPitchClassByFactorization: (factors: YerFactorization) => YerPitchClass =
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
    getYerPitchClassByFactorization,
    getYerFactorizationByPitchClass,
}
