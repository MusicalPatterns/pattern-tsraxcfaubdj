import { as, Ordinal } from '@musical-patterns/utilities'
import { thunkFirstHarmonyContourWhole } from '../../../../src/indexForTest'
import { testDoesNotUseSamePitchesAsBass } from '../../../support/helpers'

describe('first harmony whole', (): void => {
    it('does not use any of the same pitches as the bass pumps', (): void => {
        const WHEN_FIRST_HARMONY_USES_PITCH_CLASS_ONE_AT_THE_BEGINNING_OF_OPENING_THE_FIRST_TIME: Ordinal = as.Ordinal(0)
        const WHEN_FIRST_HARMONY_USES_PITCH_CLASS_SEVENTEEN_AT_THE_END_OF_OPENING_ENTRANCE_AS_PART_OF_LOOP: Ordinal = as.Ordinal(4)
        const WHEN_FIRST_HARMONY_USES_PITCH_CLASS_ONE_AT_THE_BEGINNING_OF_OPENING_THE_SECOND_TIME: Ordinal = as.Ordinal(5)
        const WHEN_FIRST_HARMONY_USES_PITCH_CLASS_SEVENTEEN_AT_THE_END_OF_OPENING_ENTRANCE: Ordinal = as.Ordinal(25)
        const exceptionalIndices: Ordinal[] = [
            WHEN_FIRST_HARMONY_USES_PITCH_CLASS_ONE_AT_THE_BEGINNING_OF_OPENING_THE_FIRST_TIME,
            WHEN_FIRST_HARMONY_USES_PITCH_CLASS_SEVENTEEN_AT_THE_END_OF_OPENING_ENTRANCE_AS_PART_OF_LOOP,
            WHEN_FIRST_HARMONY_USES_PITCH_CLASS_ONE_AT_THE_BEGINNING_OF_OPENING_THE_SECOND_TIME,
            WHEN_FIRST_HARMONY_USES_PITCH_CLASS_SEVENTEEN_AT_THE_END_OF_OPENING_ENTRANCE,
        ]
        testDoesNotUseSamePitchesAsBass(thunkFirstHarmonyContourWhole(), exceptionalIndices)
    })
})
