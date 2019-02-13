// tslint:disable no-magic-numbers

import { Cardinal, Scalar, to } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../constants'

const YER_SCALARS: Scalar[] = [ YER_ELEVEN, YER_THIRTEEN, YER_SEVENTEEN, YER_NINETEEN ]
const YER_PITCH_CLASS_COUNT: Cardinal = to.Cardinal(16)
const YER_EXCEPTION_PITCH_CLASS_COUNT: Cardinal = to.Cardinal(2)
const YER_SCALE_INDEX: number = 2
const YER_EXCEPTION_SCALE_INDEX: number = 3

export {
    YER_SCALARS,
    YER_PITCH_CLASS_COUNT,
    YER_EXCEPTION_PITCH_CLASS_COUNT,
    YER_SCALE_INDEX,
    YER_EXCEPTION_SCALE_INDEX,
}
