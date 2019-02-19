import { Ordinal, to } from '@musical-patterns/utilities'
import { buildFirstHarmonyContourWhole } from '../../../../src/indexForTest'
import { testDoesNotUseSamePitchesAsBass } from './helpers'

describe('first harmony whole', () => {
    it('does not use any of the same pitches as the bass pumps', () => {
        const WHEN_FIRST_HARMONY_USES_PITCH_CLASS_SEVENTEEN_AT_THE_END_OF_OPENING_ENTRANCE_AS_PART_OF_LOOP: Ordinal = to.Ordinal(5)
        const WHEN_FIRST_HARMONY_USES_PITCH_CLASS_SEVENTEEN_AT_THE_END_OF_OPENING_ENTRANCE: Ordinal = to.Ordinal(26)
        const exceptionalIndices: Ordinal[] = [
            WHEN_FIRST_HARMONY_USES_PITCH_CLASS_SEVENTEEN_AT_THE_END_OF_OPENING_ENTRANCE_AS_PART_OF_LOOP,
            WHEN_FIRST_HARMONY_USES_PITCH_CLASS_SEVENTEEN_AT_THE_END_OF_OPENING_ENTRANCE,
        ]
        testDoesNotUseSamePitchesAsBass(buildFirstHarmonyContourWhole(), exceptionalIndices)
    })
})
