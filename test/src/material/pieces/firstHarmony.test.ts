import { PitchValueScale, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import { as, ContourPiece } from '@musical-patterns/utilities'
import {
    FOURTH_OCTAVE,
    HALF_NOTE,
    THIRD_OCTAVE,
    THREE_WHOLE_NOTES,
    thunkFirstHarmonyContourPieces,
    WHOLE_NOTE,
    YerPitchClass,
    yerPitchClassIndex,
    YER_SCALE_INDEX,
} from '../../../../src/indexForTest'

describe('first harmony pieces', (): void => {
    it('comes out like this', (): void => {
        expect(thunkFirstHarmonyContourPieces())
            .toEqual(
                [
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._1), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._1), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), THREE_WHOLE_NOTES, YER_SCALE_INDEX ],
                    ],
                    [],
                    [],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [

                        [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                ]
                    .map((contourPiece: number[][]): ContourPiece<PitchValueScale> => as.ContourPiece<PitchValueScale>(contourPiece)),
            )
    })
})
