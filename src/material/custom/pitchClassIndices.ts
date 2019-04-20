import { as, Cardinal, notAs, use } from '@musical-patterns/utilities'
import { YER_EXCEPTION_PITCH_CLASS_COUNT, YER_PITCH_CLASS_COUNT } from '../constants'
import { Yer, YerExceptionPitchClass, YerPitchClass } from './types'
import { computeYer } from './yer'

const computeOrderedPitchClassIndices: () => YerPitchClass[] =
    (): YerPitchClass[] =>
        computeYer()
            .map((yer: Yer): YerPitchClass => yer.pitchClass)

const yerExceptionPitchClassesOrderedByPitch: YerExceptionPitchClass[] = [
    YerExceptionPitchClass._11_11_17,
    YerExceptionPitchClass._13_19_OVER_11,
]

const yerPitchClassIndex: (octaveIndex: number, yerPitchClass: YerPitchClass) => number =
    (octaveIndex: number, yerPitchClass: YerPitchClass): number =>
        notAs.Cardinal(use.Translation(
            use.Multiple(YER_PITCH_CLASS_COUNT, as.Multiple<Cardinal<YerPitchClass>>(octaveIndex)),
            as.Translation<Cardinal<YerPitchClass>>(
                computeOrderedPitchClassIndices()
                    .indexOf(yerPitchClass),
            ),
        ))

const yerExceptionPitchClassIndex: (octaveIndex: number, yerExceptionPitchClass: YerExceptionPitchClass) => number =
    (octaveIndex: number, yerExceptionPitchClass: YerExceptionPitchClass): number =>
        notAs.Cardinal(use.Translation(
            use.Multiple(YER_EXCEPTION_PITCH_CLASS_COUNT, as.Multiple<Cardinal<YerExceptionPitchClass>>(octaveIndex)),
            as.Translation<Cardinal<YerExceptionPitchClass>>(
                yerExceptionPitchClassesOrderedByPitch
                    .indexOf(yerExceptionPitchClass),
            ),
        ))

export {
    yerPitchClassIndex,
    yerExceptionPitchClassIndex,
    computeOrderedPitchClassIndices,
}
