import { Frequency, octaveReduce, product, quotient, Scalar } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../constants'
import { computeYer, Yer } from './custom'

const computeYerScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeYer()
            .map((yer: Yer): Scalar<Frequency> =>
                yer.scalar)

const computeYerExceptionScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        [
            product(YER_ELEVEN, YER_ELEVEN, YER_SEVENTEEN),
            quotient(product(YER_THIRTEEN, YER_NINETEEN), YER_ELEVEN),
        ].map(octaveReduce)

export {
    computeYerScalars,
    computeYerExceptionScalars,
    computeYer,
}
