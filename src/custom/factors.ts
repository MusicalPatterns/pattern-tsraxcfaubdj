import { DictionaryOf } from '@musical-patterns/utilities'
import { YerFactor, YerFactorization, YerPitchClass } from './types'

const pitchClassByFactorization: DictionaryOf<DictionaryOf<DictionaryOf<DictionaryOf<YerPitchClass>>>> = {
    false: {
        false: {
            false: {
                false: YerPitchClass._1,
                true: YerPitchClass._19,
            },
            true: {
                false: YerPitchClass._17,
                true: YerPitchClass._17_19,
            },
        },
        true: {
            false: {
                false: YerPitchClass._13,
                true: YerPitchClass._13_19,
            },
            true: {
                false: YerPitchClass._13_17,
                true: YerPitchClass._13_17_19,
            },
        },
    },
    true: {
        false: {
            false: {
                false: YerPitchClass._11,
                true: YerPitchClass._11_19,
            },
            true: {
                false: YerPitchClass._11_17,
                true: YerPitchClass._11_17_19,
            },
        },
        true: {
            false: {
                false: YerPitchClass._11_13,
                true: YerPitchClass._11_13_19,
            },
            true: {
                false: YerPitchClass._11_13_17,
                true: YerPitchClass._11_13_17_19,
            },
        },
    },
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
        factorizationByPitchClass[ yer ]

const getYerPitchClassByFactorization: (factors: YerFactorization) => YerPitchClass =
    (yerFactorization: YerFactorization): YerPitchClass => {
        const {
            [ YerFactor._11 ]: eleven = false,
            [ YerFactor._13 ]: thirteen = false,
            [ YerFactor._17 ]: seventeen = false,
            [ YerFactor._19 ]: nineteen = false,
        } = yerFactorization

        return pitchClassByFactorization
            [ eleven.toString() ]
            [ thirteen.toString() ]
            [ seventeen.toString() ]
            [ nineteen.toString() ]
    }

export {
    getYerPitchClassByFactorization,
    getYerFactorizationByPitchClass,
}
