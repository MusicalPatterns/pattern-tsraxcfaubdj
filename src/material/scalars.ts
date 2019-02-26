import { Frequency, octaveReduce, product, quotient, Scalar } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../constants'
import { buildYer, Yer } from './custom'

const buildYerScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        buildYer()
            .map((yer: Yer): Scalar<Frequency> =>
                yer.scalar)

const buildYerExceptionScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        [
            product(YER_ELEVEN, YER_ELEVEN, YER_SEVENTEEN),
            quotient(product(YER_THIRTEEN, YER_NINETEEN), YER_ELEVEN),
        ].map(octaveReduce)

export {
    buildYerScalars,
    buildYerExceptionScalars,
    buildYer,
}
