// tslint:disable no-magic-numbers

import { Frequency, Multiple, Scalar, to } from '@musical-patterns/utilities'

const YER_ELEVEN: Multiple<Scalar<Frequency>> = to.Multiple<Scalar<Frequency>>(11)
const YER_THIRTEEN: Multiple<Scalar<Frequency>> = to.Multiple<Scalar<Frequency>>(13)
const YER_SEVENTEEN: Multiple<Scalar<Frequency>> = to.Multiple<Scalar<Frequency>>(17)
const YER_NINETEEN: Multiple<Scalar<Frequency>> = to.Multiple<Scalar<Frequency>>(19)

export {
    YER_ELEVEN,
    YER_THIRTEEN,
    YER_SEVENTEEN,
    YER_NINETEEN,
}
