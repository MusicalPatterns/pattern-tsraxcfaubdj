import { PitchDurationScale } from '@musical-patterns/pattern'
import { Ordinal, to } from '@musical-patterns/utilities'
import {
    buildLeadContourPieces,
    DOTTED_HALF_NOTE,
    FIFTH_OCTAVE,
    FOURTH_OCTAVE,
    HALF_NOTE,
    QUARTER_NOTE,
    WHOLE_NOTE,
    YER_SCALE_INDEX,
    YerPitchClass,
    yerPitchClassIndex,
} from '../../../../src/indexForTest'
import { testEveryIntervalIsSimple } from './helpers'

describe('lead pieces', () => {
    it('almost every interval is a simple 11, 13, 17, or 19', async (done: DoneFn) => {
        const BETWEEN_BAR_3_AND_4: number = 10
        const BETWEEN_BAR_13_AND_14: number = 27
        const BETWEEN_BAR_14_AND_15_IS_ACTUALLY_NOT_NECESSARY_TO_EXCEPT_BECAUSE_IT_GETS_AROUND_THIS_CHECK_WITH_A_COMMA_SHIFT: number = 28
        const BETWEEN_BAR_22_AND_23_WHICH_IS_THE_SAME_AS_BETWEEN_THREE_AND_FOUR: number = 48

        const exceptionalIndices: Ordinal[] = [
            BETWEEN_BAR_3_AND_4,
            BETWEEN_BAR_13_AND_14,
            BETWEEN_BAR_14_AND_15_IS_ACTUALLY_NOT_NECESSARY_TO_EXCEPT_BECAUSE_IT_GETS_AROUND_THIS_CHECK_WITH_A_COMMA_SHIFT,
            BETWEEN_BAR_22_AND_23_WHICH_IS_THE_SAME_AS_BETWEEN_THREE_AND_FOUR,
        ].map(to.Ordinal)

        const indexOfLeadThreadSpec: Ordinal = to.Ordinal(0)
        await testEveryIntervalIsSimple(indexOfLeadThreadSpec, exceptionalIndices)

        done()
    })

    it('comes out like this', () => {
        expect(buildLeadContourPieces())
            .toEqual(
                [
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],

                    [
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],

                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],

                    [
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
                    ],

                    [
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],
                ].map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece)),
            )
    })
})