import { thunkBassPitchClassIndexSet } from '../../../support/helpers'

describe('bass whole', (): void => {
    it('uses 10 total out of the 16 yer pitch classes', (): void => {
        const bassPitchClassIndexSet: number[] = thunkBassPitchClassIndexSet()

        expect(bassPitchClassIndexSet.length)
            .toBe(10)
    })
})
