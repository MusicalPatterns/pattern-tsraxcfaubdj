// tslint:disable no-magic-numbers

import { Frequency, Scalar, to } from '@musical-patterns/utilities'

const YER_ELEVEN: Scalar<Frequency> = to.Scalar(to.Frequency(11))
const YER_THIRTEEN: Scalar<Frequency> = to.Scalar(to.Frequency(13))
const YER_SEVENTEEN: Scalar<Frequency> = to.Scalar(to.Frequency(17))
const YER_NINETEEN: Scalar<Frequency> = to.Scalar(to.Frequency(19))

export {
    YER_ELEVEN,
    YER_THIRTEEN,
    YER_SEVENTEEN,
    YER_NINETEEN,
}
