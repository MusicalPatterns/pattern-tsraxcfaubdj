import { apply, from, octaveReduce, powerSet, product, quotient, Scalar, to } from '@musical-patterns/utilities'
import {
    YER_SCALAR_ELEVEN,
    YER_SCALAR_NINETEEN,
    YER_SCALAR_SEVENTEEN,
    YER_SCALAR_THIRTEEN,
    YER_SCALARS,
} from './constants'

const buildYerScalars: () => Scalar[] =
    (): Scalar[] =>
        powerSet(YER_SCALARS.map(from.Scalar))
            .map((set: number[]): Scalar =>
                set.reduce(
                    (accumulator: Scalar, scalar: number): Scalar =>
                        apply.Scalar(accumulator, to.Scalar(scalar)),
                    to.Scalar(1),
                ))
            .map(octaveReduce)
            .sort()

const buildYerExceptionScalars: () => Scalar[] =
    (): Scalar[] =>
        [
            product(YER_SCALAR_ELEVEN, YER_SCALAR_ELEVEN, YER_SCALAR_SEVENTEEN),
            quotient(product(YER_SCALAR_THIRTEEN, YER_SCALAR_NINETEEN), YER_SCALAR_ELEVEN),
        ].map(octaveReduce)

export {
    buildYerScalars,
    buildYerExceptionScalars,
}
