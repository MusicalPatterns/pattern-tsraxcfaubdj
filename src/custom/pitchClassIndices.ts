import { apply, from, to } from '@musical-patterns/utilities'
import { YER_EXCEPTION_PITCH_CLASS_COUNT, YER_PITCH_CLASS_COUNT } from '../materials'
import { YerExceptionPitchClass, YerPitchClass } from './types'

const yerPitchClassesOrdered: YerPitchClass[] = [
    YerPitchClass._1,
    YerPitchClass._13_17_19,
    YerPitchClass._17,
    YerPitchClass._11_13,
    YerPitchClass._11_13_17,
    YerPitchClass._19,
    YerPitchClass._17_19,
    YerPitchClass._11_13_19,
    YerPitchClass._11,
    YerPitchClass._11_13_17_19,
    YerPitchClass._11_17,
    YerPitchClass._13,
    YerPitchClass._11_19,
    YerPitchClass._13_17,
    YerPitchClass._11_17_19,
    YerPitchClass._13_19,
]

const yerExceptionPitchClassesOrdered: YerExceptionPitchClass[] = [
    YerExceptionPitchClass._11_11_17,
    YerExceptionPitchClass._13_19_OVER_11,
]

const yerPitchClassIndex: (octaveIndex: number, yerPitchClass: YerPitchClass) => number =
    (octaveIndex: number, yerPitchClass: YerPitchClass): number =>
        from.Cardinal(apply.Translation(
            apply.Scalar(YER_PITCH_CLASS_COUNT, to.Scalar(octaveIndex)),
            to.Translation(yerPitchClassesOrdered.indexOf(yerPitchClass)),
        ))

const yerExceptionPitchClassIndex: (octaveIndex: number, yerExceptionPitchClass: YerExceptionPitchClass) => number =
    (octaveIndex: number, yerExceptionPitchClass: YerExceptionPitchClass): number =>
        from.Cardinal(apply.Translation(
            apply.Scalar(YER_EXCEPTION_PITCH_CLASS_COUNT, to.Scalar(octaveIndex)),
            to.Translation(yerExceptionPitchClassesOrdered.indexOf(yerExceptionPitchClass)),
        ))

export {
    yerPitchClassIndex,
    yerExceptionPitchClassIndex,
}
