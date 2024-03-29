import { PitchValueScale, Sound, Voice } from '@musical-patterns/material'
import { as, ContourPiece, Ordinal } from '@musical-patterns/utilities'
import {
    DOTTED_HALF_NOTE,
    FIFTH_OCTAVE,
    FOURTH_OCTAVE,
    HALF_NOTE,
    QUARTER_NOTE,
    thunkLeadContourPieces,
    WHOLE_NOTE,
    YerPitchClass,
    yerPitchClassIndex,
    YER_SCALE_INDEX,
} from '../../../../src/indexForTest'
import { testEveryStepIsSimple } from '../../../support/helpers'

describe('lead pieces', (): void => {
    it('almost every interval is a simple 11, 13, 17, or 19', async (): Promise<void> => {
        const BETWEEN_BAR_3_AND_4: number = 10
        const BETWEEN_BAR_13_AND_14: number = 27
        const BETWEEN_BAR_14_AND_15_IS_ACTUALLY_NOT_NECESSARY_TO_EXCEPT_BECAUSE_IT_CIRCIUMVRENTS_THIS_CHECK_WITH_A_COMMA_SHIFT: number = 28
        const BETWEEN_BAR_22_AND_23_WHICH_IS_THE_SAME_AS_BETWEEN_THREE_AND_FOUR: number = 48

        const exceptionalIndices: Array<Ordinal<Sound[]>> = [
            BETWEEN_BAR_3_AND_4,
            BETWEEN_BAR_13_AND_14,
            BETWEEN_BAR_14_AND_15_IS_ACTUALLY_NOT_NECESSARY_TO_EXCEPT_BECAUSE_IT_CIRCIUMVRENTS_THIS_CHECK_WITH_A_COMMA_SHIFT,
            BETWEEN_BAR_22_AND_23_WHICH_IS_THE_SAME_AS_BETWEEN_THREE_AND_FOUR,
        ].map((numeral: number): Ordinal<Sound[]> => as.Ordinal<Sound[]>(numeral))

        const INDEX_OF_LEAD_VOICE: Ordinal<Voice[]> = as.Ordinal<Voice[]>(0)
        await testEveryStepIsSimple(INDEX_OF_LEAD_VOICE, exceptionalIndices)
    })

    it('comes out like this', (): void => {
        expect(thunkLeadContourPieces())
            .toEqual(
                [
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
                ].map((contourPiece: number[][]): ContourPiece<PitchValueScale> => as.ContourPiece<PitchValueScale>(contourPiece)),
            )
    })
})
