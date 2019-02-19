import { buildSecondHarmonyContourWhole } from '../../../../src/indexForTest'
import { testDoesNotUseSamePitchesAsBass } from './helpers'

describe('second harmony whole', () => {
    it('does not use any of the same pitches as the bass pumps', () => {
        testDoesNotUseSamePitchesAsBass(buildSecondHarmonyContourWhole())
    })
})
