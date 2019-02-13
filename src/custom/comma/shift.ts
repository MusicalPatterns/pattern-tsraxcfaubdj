import { getYerFactorizationByPitchClass, getYerPitchClassByFactorization } from '../factors'
import { YerFactorization, YerPitchClass } from '../types'

const commaShifts: YerPitchClass[][] = [
    [ YerPitchClass._11_13_17, YerPitchClass._19 ],
    [ YerPitchClass._11_17_19, YerPitchClass._13_17 ],
    [ YerPitchClass._13, YerPitchClass._11_19 ],
]

const commaShiftsDictionaryStyle: Partial<{ [key in YerPitchClass]: YerPitchClass }> = {
    [ YerPitchClass._11_13_17 ]: YerPitchClass._19,
    [ YerPitchClass._19 ]: YerPitchClass._11_13_17,
    [ YerPitchClass._11_17_19 ]: YerPitchClass._13_17,
    [ YerPitchClass._13_17 ]: YerPitchClass._11_17_19,
    [ YerPitchClass._11_19 ]: YerPitchClass._13,
    [ YerPitchClass._13 ]: YerPitchClass._11_19,
}

const commaShiftPossibleHere: (factorization: YerFactorization) => boolean =
    (factorization: YerFactorization): boolean =>
        !commaShifts.every((commaShift: YerPitchClass[]) =>
            commaShift.every((yer: YerPitchClass) =>
                getYerPitchClassByFactorization(factorization) !== yer,
            ),
        )

const applyCommaShift: (factorization: YerFactorization) => YerFactorization =
    (factorization: YerFactorization): YerFactorization => {
        const yer: YerPitchClass = getYerPitchClassByFactorization(factorization)

        const commaShiftedYer: YerPitchClass = commaShiftsDictionaryStyle[ yer ] as YerPitchClass

        return getYerFactorizationByPitchClass(commaShiftedYer)
    }

export {
    commaShiftPossibleHere,
    applyCommaShift,
}
