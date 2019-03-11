import { computeBassPitchClassIndexSet } from './helpers'

describe('bass whole', () => {
    it('uses 10 total out of the 16 yer pitch classes', () => {
        const bassPitchClassIndexSet: number[] = computeBassPitchClassIndexSet()

        expect(bassPitchClassIndexSet.length)
            .toBe(10)
    })
})
