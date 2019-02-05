// tslint:disable no-magic-numbers

import { Count, Scalar, to } from '@musical-patterns/utilities'

const YER_SCALARS: Scalar[] = [ 11, 13, 17, 19 ].map(to.Scalar)
const YER_PITCH_CLASS_COUNT: Count = to.Count(16)

export {
    YER_SCALARS,
    YER_PITCH_CLASS_COUNT,
}
