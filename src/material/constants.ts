// tslint:disable no-magic-numbers

import { as, Cardinal } from '@musical-patterns/utilities'
import { YerExceptionPitchClass, YerPitchClass } from './custom'

const YER_PITCH_CLASS_COUNT: Cardinal<YerPitchClass> = as.Cardinal<YerPitchClass>(16)
const YER_EXCEPTION_PITCH_CLASS_COUNT: Cardinal<YerExceptionPitchClass> = as.Cardinal<YerExceptionPitchClass>(2)
const YER_SCALE_INDEX: number = 2
const YER_EXCEPTION_SCALE_INDEX: number = 3

export {
    YER_PITCH_CLASS_COUNT,
    YER_EXCEPTION_PITCH_CLASS_COUNT,
    YER_SCALE_INDEX,
    YER_EXCEPTION_SCALE_INDEX,
}
