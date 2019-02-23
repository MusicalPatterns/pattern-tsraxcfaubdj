import { octaveReduce, product, quotient, Scalar } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../constants'
import { buildYer, Yer } from './custom'

const buildYerScalars: () => Scalar[] =
    (): Scalar[] =>
        buildYer()
            .map((yer: Yer): Scalar =>
                yer.scalar)

const buildYerExceptionScalars: () => Scalar[] =
    (): Scalar[] =>
        [
            product(YER_ELEVEN, YER_ELEVEN, YER_SEVENTEEN),
            quotient(product(YER_THIRTEEN, YER_NINETEEN), YER_ELEVEN),
        ].map(octaveReduce)

export {
    buildYerScalars,
    buildYerExceptionScalars,
    buildYer,
}
