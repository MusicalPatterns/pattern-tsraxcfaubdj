import {
    Frequency,
    from,
    Hz,
    insteadOf,
    Multiple,
    octaveReduce,
    product,
    quotient,
    Scalar,
    to,
} from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../constants'
import { computeYer, Yer } from './custom'

const computeYerScalars: () => Array<Scalar<Hz>> =
    (): Array<Scalar<Hz>> =>
        computeYer()
            .map((yer: Yer): Scalar<Hz> =>
                insteadOf<Scalar, Hz>(yer.scalar),
            )

const computeYerExceptionScalars: () => Array<Scalar<Hz>> =
    (): Array<Scalar<Hz>> =>
        [
            product(YER_ELEVEN, YER_ELEVEN, YER_SEVENTEEN),
            quotient(product(YER_THIRTEEN, YER_NINETEEN), YER_ELEVEN),
        ]
            .map((num: number) => to.Scalar<Frequency>(num))
            .map(octaveReduce)
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            .map((scalar: Scalar<Frequency>) => insteadOf<Scalar, Hz>(scalar))

export {
    computeYerScalars,
    computeYerExceptionScalars,
    computeYer,
}
