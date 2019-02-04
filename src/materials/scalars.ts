import { apply, from, octaveReduce, powerSet, Scalar, to } from '@musical-patterns/utilities'
import { YER_SCALARS } from './constants'

const buildYerScalars: () => Scalar[] =
    (): Scalar[] =>
        powerSet(YER_SCALARS.map(from.Scalar))
            .map((combination: number[]): Scalar =>
                combination.reduce(
                    (accumulator: Scalar, scalar: number): Scalar =>
                        apply.Scalar(accumulator, to.Scalar(scalar)),
                    to.Scalar(1),
                ))
            .map(octaveReduce)
            .sort()

export {
    buildYerScalars,
}
