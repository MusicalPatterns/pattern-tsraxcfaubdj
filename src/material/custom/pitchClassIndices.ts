import { as, Cardinal, Thunk, use } from '@musical-patterns/utilities'
import { YER_EXCEPTION_PITCH_CLASS_COUNT, YER_PITCH_CLASS_COUNT } from '../constants'
import { Yer, YerExceptionPitchClass, YerPitchClass } from './types'
import { thunkYer } from './yer'

const thunkOrderedPitchClassIndices: Thunk<YerPitchClass[]> =
    (): YerPitchClass[] =>
        thunkYer()
            .map((yer: Yer): YerPitchClass => yer.pitchClass)

const yerExceptionPitchClassesOrderedByPitch: YerExceptionPitchClass[] = [
    YerExceptionPitchClass._11_11_17,
    YerExceptionPitchClass._13_19_OVER_11,
]

const yerPitchClassIndex: (octaveIndex: number, yerPitchClass: YerPitchClass) => number =
    (octaveIndex: number, yerPitchClass: YerPitchClass): number =>
        as.number(use.Cardinal(
            use.Multiple(YER_PITCH_CLASS_COUNT, as.Multiple<Cardinal<YerPitchClass>>(octaveIndex)),
            as.Cardinal<Cardinal<YerPitchClass>>(
                thunkOrderedPitchClassIndices()
                    .indexOf(yerPitchClass),
            ),
        ))

const yerExceptionPitchClassIndex: (octaveIndex: number, yerExceptionPitchClass: YerExceptionPitchClass) => number =
    (octaveIndex: number, yerExceptionPitchClass: YerExceptionPitchClass): number =>
        as.number(use.Cardinal(
            use.Multiple(YER_EXCEPTION_PITCH_CLASS_COUNT, as.Multiple<Cardinal<YerExceptionPitchClass>>(octaveIndex)),
            as.Cardinal<Cardinal<YerExceptionPitchClass>>(
                yerExceptionPitchClassesOrderedByPitch
                    .indexOf(yerExceptionPitchClass),
            ),
        ))

export {
    yerPitchClassIndex,
    yerExceptionPitchClassIndex,
    thunkOrderedPitchClassIndices,
}
