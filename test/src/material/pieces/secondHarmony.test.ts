import { PitchValueScale, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import { as, ContourPiece } from '@musical-patterns/utilities'
import {
    FOURTH_OCTAVE,
    HALF_NOTE,
    THREE_WHOLE_NOTES,
    thunkSecondHarmonyContourPieces,
    WHOLE_NOTE,
    YerPitchClass,
    yerPitchClassIndex,
    YER_SCALE_INDEX,
} from '../../../../src/indexForTest'

describe('second harmony pieces', (): void => {
    it('comes out like this', (): void => {
        expect(thunkSecondHarmonyContourPieces())
            .toEqual(
                [
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), THREE_WHOLE_NOTES, YER_SCALE_INDEX ],
                    ],
                    [],
                    [],
                    [
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                ].map((contourPiece: number[][]): ContourPiece<PitchValueScale> => as.ContourPiece<PitchValueScale>(contourPiece)),
            )
    })
})
