// tslint:disable no-magic-numbers

import { Frequency, Multiple, Scalar } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../../constants'

const YER_FACTORS: Array<Multiple<Scalar<Frequency>>> = [ YER_ELEVEN, YER_THIRTEEN, YER_SEVENTEEN, YER_NINETEEN ]

export {
    YER_FACTORS,
}
