import { as, Ordinal } from '@musical-patterns/utilities'
import { thunkLeadContourWhole } from '../../../../src/indexForTest'
import { testDoesNotUseSamePitchesAsBass } from '../../../support/helpers'

describe('lead whole', (): void => {
    it('does not use any of the same pitches as the bass pumps', (): void => {
        const WHEN_FIRST_HARMONY_USES_PITCH_CLASS_THIRTEEN_AT_THE_END_OF_DESPERATION: Ordinal = as.Ordinal(24)
        const exceptionalIndices: Ordinal[] = [
            WHEN_FIRST_HARMONY_USES_PITCH_CLASS_THIRTEEN_AT_THE_END_OF_DESPERATION,
        ]
        testDoesNotUseSamePitchesAsBass(thunkLeadContourWhole(), exceptionalIndices)
    })
})
