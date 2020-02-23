import { as, insteadOf, octaveReduce, Pitch, product, quotient, Scalar, Thunk } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from './constants'
import { thunkYer, Yer } from './custom'

const thunkYerScalars: Thunk<Array<Scalar<Pitch>>> =
    (): Array<Scalar<Pitch>> =>
        thunkYer()
            .map((yer: Yer): Scalar<Pitch> =>
                insteadOf<Scalar, Pitch>(yer.scalar),
            )

const thunkYerExceptionScalars: Thunk<Array<Scalar<Pitch>>> =
    (): Array<Scalar<Pitch>> =>
        [
            as.number(product(YER_ELEVEN, YER_ELEVEN, YER_SEVENTEEN)),
            as.number(quotient(product(YER_THIRTEEN, YER_NINETEEN), YER_ELEVEN)),
        ]
            .map((numeral: number): Scalar<Pitch> => as.Scalar<Pitch>(numeral))
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            .map((scalar: Scalar<Pitch>): Scalar<Pitch> => octaveReduce(scalar))

export {
    thunkYerScalars,
    thunkYerExceptionScalars,
    thunkYer,
}
