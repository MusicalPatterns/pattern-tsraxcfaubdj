import { thunkSecondHarmonyContourWhole } from '../../../../src/indexForTest'
import { testDoesNotUseSamePitchesAsBass } from '../../../support/helpers'

describe('second harmony whole', (): void => {
    it('does not use any of the same pitches as the bass pumps', (): void => {
        testDoesNotUseSamePitchesAsBass(thunkSecondHarmonyContourWhole())
    })
})
