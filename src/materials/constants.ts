// tslint:disable no-magic-numbers

import { Cardinal, Scalar, to } from '@musical-patterns/utilities'

const YER_SCALAR_ELEVEN: Scalar = to.Scalar(11)
const YER_SCALAR_THIRTEEN: Scalar = to.Scalar(13)
const YER_SCALAR_SEVENTEEN: Scalar = to.Scalar(17)
const YER_SCALAR_NINETEEN: Scalar = to.Scalar(19)
const YER_SCALARS: Scalar[] = [ YER_SCALAR_ELEVEN, YER_SCALAR_THIRTEEN, YER_SCALAR_SEVENTEEN, YER_SCALAR_NINETEEN ]
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
    YER_SCALAR_ELEVEN,
    YER_SCALAR_THIRTEEN,
    YER_SCALAR_SEVENTEEN,
    YER_SCALAR_NINETEEN,
}
