import { apply, octaveReduce, powerSet, product, quotient, reduce, Scalar, to } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../constants'
import { YER_SCALARS } from './constants'

const buildYerScalars: () => Scalar[] =
    (): Scalar[] =>
        powerSet(YER_SCALARS)
            .map((set: Scalar[]): Scalar =>
                reduce(
                    set,
                    (accumulator: Scalar, scalar: Scalar): Scalar =>
                        apply.Scalar(accumulator, scalar),
                    to.Scalar(1),
                ))
            .map(octaveReduce)
            .sort()

const buildYerExceptionScalars: () => Scalar[] =
    (): Scalar[] =>
        [
            product(YER_ELEVEN, YER_ELEVEN, YER_SEVENTEEN),
            quotient(product(YER_THIRTEEN, YER_NINETEEN), YER_ELEVEN),
        ].map(octaveReduce)

export {
    buildYerScalars,
    buildYerExceptionScalars,
}
