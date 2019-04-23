// tslint:disable no-magic-numbers

import { as, Cardinal, Frequency, Scalar } from '@musical-patterns/utilities'
import { YerExceptionPitchClass, YerMultiple, YerPitchClass } from './custom'

const YER_PITCH_CLASS_COUNT: Cardinal<YerPitchClass> = as.Cardinal<YerPitchClass>(16)
const YER_EXCEPTION_PITCH_CLASS_COUNT: Cardinal<YerExceptionPitchClass> = as.Cardinal<YerExceptionPitchClass>(2)
const YER_SCALE_INDEX: number = 2
const YER_EXCEPTION_SCALE_INDEX: number = 3

const YER_ELEVEN: YerMultiple = as.Multiple<Scalar<Frequency>>(11)
const YER_THIRTEEN: YerMultiple = as.Multiple<Scalar<Frequency>>(13)
const YER_SEVENTEEN: YerMultiple = as.Multiple<Scalar<Frequency>>(17)
const YER_NINETEEN: YerMultiple = as.Multiple<Scalar<Frequency>>(19)

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
