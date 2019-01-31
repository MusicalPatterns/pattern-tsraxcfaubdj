import { apply, octaveReduce, powerSet, Scalar, to } from '@musical-patterns/utilities'
import { YER_SCALARS } from './constants'

const buildYerScalars: () => Scalar[] =
    (): Scalar[] =>
        powerSet(YER_SCALARS)
            .map((combination: Scalar[]): Scalar =>
                combination.reduce(
                    (accumulator: Scalar, scalar: Scalar): Scalar =>
                        apply.Scalar(accumulator, scalar),
                    to.Scalar(1),
                ))
            .map(octaveReduce)
            .sort()

export {
    buildYerScalars,
}
