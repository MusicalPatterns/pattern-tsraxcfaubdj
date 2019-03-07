import { isUndefined, Maybe } from '@musical-patterns/utilities'
import { getYerFactorizationByPitchClass, getYerPitchClassByFactorization } from '../factors'
import { YerFactorization, YerPitchClass } from '../types'

const possibleCommaShifts: Partial<{ [key in YerPitchClass]: YerPitchClass }> = {
    [ YerPitchClass._11_13_17 ]: YerPitchClass._19,
    [ YerPitchClass._19 ]: YerPitchClass._11_13_17,
    [ YerPitchClass._11_17_19 ]: YerPitchClass._13_17,
    [ YerPitchClass._13_17 ]: YerPitchClass._11_17_19,
    [ YerPitchClass._11_19 ]: YerPitchClass._13,
    [ YerPitchClass._13 ]: YerPitchClass._11_19,
}

const applyCommaShift: (factorization: YerFactorization) => YerFactorization =
    (factorization: YerFactorization): YerFactorization => {
        const yerPitchClass: YerPitchClass = getYerPitchClassByFactorization(factorization)

        const commaShiftedYer: Maybe<YerPitchClass> = possibleCommaShifts[ yerPitchClass ]

        if (isUndefined(commaShiftedYer)) {
            throw new Error(
                `You tried to comma shift at a place you cannot: ${yerPitchClass} at factorization ${factorization}`,
            )
        }

        return getYerFactorizationByPitchClass(commaShiftedYer)
    }

export {
    applyCommaShift,
}
