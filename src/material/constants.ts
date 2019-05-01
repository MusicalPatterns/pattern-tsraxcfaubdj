// tslint:disable no-magic-numbers

import { as, Cardinal, Pitch, Scalar } from '@musical-patterns/utilities'
import { YerExceptionPitchClass, YerMultiple, YerPitchClass } from './custom'

const YER_PITCH_CLASS_COUNT: Cardinal<YerPitchClass> = as.Cardinal<YerPitchClass>(16)
const YER_EXCEPTION_PITCH_CLASS_COUNT: Cardinal<YerExceptionPitchClass> = as.Cardinal<YerExceptionPitchClass>(2)
const YER_SCALE_INDEX: number = 0
const YER_EXCEPTION_SCALE_INDEX: number = 1

const YER_ELEVEN: YerMultiple = as.Multiple<Scalar<Pitch>>(11)
const YER_THIRTEEN: YerMultiple = as.Multiple<Scalar<Pitch>>(13)
const YER_SEVENTEEN: YerMultiple = as.Multiple<Scalar<Pitch>>(17)
const YER_NINETEEN: YerMultiple = as.Multiple<Scalar<Pitch>>(19)

export {
    YER_PITCH_CLASS_COUNT,
    YER_EXCEPTION_PITCH_CLASS_COUNT,
    YER_SCALE_INDEX,
    YER_EXCEPTION_SCALE_INDEX,
    YER_ELEVEN,
    YER_THIRTEEN,
    YER_SEVENTEEN,
    YER_NINETEEN,
}
