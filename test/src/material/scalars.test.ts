import { Hz, Scalar, to } from '@musical-patterns/utilities'
import { computeYerExceptionScalars, computeYerScalars } from '../../../src/indexForTest'

describe('scalars', () => {
    describe('yer scalars', () => {
        it('are the octave reduced power set of the prime harmonics 11, 13, 17, and 19', () => {
            const actualScalars: Array<Scalar<Hz>> = computeYerScalars()

            const expectedScalarsAsRatios: Array<Scalar<Hz>> = [
                // tslint:disable-next-line no-identical-expressions
                1 / 1,
                4199 / 4096,
                17 / 16,
                143 / 128,
                2431 / 2048,
                19 / 16,
                323 / 256,
                2717 / 2048,
                11 / 8,
                46189 / 32768,
                187 / 128,
                13 / 8,
                209 / 128,
                221 / 128,
                3553 / 2048,
                247 / 128,
            ].map((expected: number) => to.Scalar<Hz>(expected))
            expect(actualScalars)
                .toEqual(expectedScalarsAsRatios)

            const expectedScalarsAsDecimals: Array<Scalar<Hz>> = [
                // tslint:disable-next-line number-literal-format
                1.0,
                1.025146484375,
                1.0625,
                1.1171875,
                1.18701171875,
                1.1875,
                1.26171875,
                1.32666015625,
                1.375,
                1.409576416015625,
                1.4609375,
                1.625,
                1.6328125,
                1.7265625,
                1.73486328125,
                1.9296875,
            ].map((expected: number) => to.Scalar<Hz>(expected))
            expect(actualScalars)
                .toBeCloseToArray(expectedScalarsAsDecimals)
        })
    })

    describe('yer exception scalars', () => {
        it('is a set of a couple scalars not members of yer at its most essential, but which come in handy when using it', () => {
            const actualScalars: Array<Scalar<Hz>> = computeYerExceptionScalars()

            const expectedScalarsAsRatios: Array<Scalar<Hz>> = [
                2057 / 2048,
                247 / 176,
            ].map((expected: number) => to.Scalar<Hz>(expected))
            expect(actualScalars)
                .toEqual(expectedScalarsAsRatios)

            const expectedScalarsAsDecimals: Array<Scalar<Hz>> = [
                1.00439453125,
                1.40340909091,
            ].map((expected: number) => to.Scalar<Hz>(expected))
            expect(actualScalars)
                .toBeCloseToArray(expectedScalarsAsDecimals)
        })
    })
})
