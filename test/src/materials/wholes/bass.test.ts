import { getBassPitchClassIndexSet } from './helpers'

describe('bass whole', () => {
    it('uses 10 total out of the 16 yer pitch classes', () => {
        const bassPitchClassIndexSet: number[] = getBassPitchClassIndexSet()

        expect(bassPitchClassIndexSet.length)
            .toBe(10)
    })
})
