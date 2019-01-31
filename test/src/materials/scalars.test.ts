import { to } from '@musical-patterns/utilities'
import { buildYerScalars } from '../../../src/indexForTest'

describe('yer scalars', () => {
    it('are the octave reduced power set of the prime harmonics 11, 13, 17, and 19', () => {
        expect(buildYerScalars())
            .toEqual([
                // tslint:disable-next-line:no-identical-expressions
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
            ].map(to.Scalar))
    })
})
