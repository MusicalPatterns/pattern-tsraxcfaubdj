import { Ordinal, to } from '@musical-patterns/utilities'
import { buildLeadContourWhole } from '../../../../src/indexForTest'
import { testDoesNotUseSamePitchesAsBass } from './helpers'

describe('lead whole', () => {
    it('does not use any of the same pitches as the bass pumps', () => {
        const WHEN_FIRST_HARMONY_USES_PITCH_CLASS_THIRTEEN_AT_THE_END_OF_DESPERATION: Ordinal = to.Ordinal(28)
        const exceptionalIndices: Ordinal[] = [
            WHEN_FIRST_HARMONY_USES_PITCH_CLASS_THIRTEEN_AT_THE_END_OF_DESPERATION,
        ]
        testDoesNotUseSamePitchesAsBass(buildLeadContourWhole(), exceptionalIndices)
    })
})
