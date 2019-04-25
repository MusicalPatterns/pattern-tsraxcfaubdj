import {
    as,
    Frequency,
    Hz,
    insteadOf,
    notAs,
    octaveReduce, Pitch,
    product,
    quotient,
    Scalar,
} from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from './constants'
import { computeYer, Yer } from './custom'

const computeYerScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeYer()
            .map((yer: Yer): Scalar<Pitch> =>
                insteadOf<Scalar, Pitch>(yer.scalar),
            )

const computeYerExceptionScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        [
            notAs.Multiple(product(YER_ELEVEN, YER_ELEVEN, YER_SEVENTEEN)),
            notAs.Scalar(quotient(product(YER_THIRTEEN, YER_NINETEEN), YER_ELEVEN)),
        ]
            .map((value: number) => as.Scalar<Frequency>(value))
            .map(octaveReduce)
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            .map((scalar: Scalar<Frequency>) => insteadOf<Scalar, Pitch>(scalar))

export {
    computeYerScalars,
    computeYerExceptionScalars,
    computeYer,
}
