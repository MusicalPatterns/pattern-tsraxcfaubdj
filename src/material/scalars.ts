import { as, insteadOf, octaveReduce, Pitch, product, quotient, Scalar } from '@musical-patterns/utilities'
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
            as.number(product(YER_ELEVEN, YER_ELEVEN, YER_SEVENTEEN)),
            as.number(quotient(product(YER_THIRTEEN, YER_NINETEEN), YER_ELEVEN)),
        ]
            .map((numeral: number): Scalar<Pitch> => as.Scalar<Pitch>(numeral))
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            .map((scalar: Scalar<Pitch>) => octaveReduce(scalar))

export {
    computeYerScalars,
    computeYerExceptionScalars,
    computeYer,
}
