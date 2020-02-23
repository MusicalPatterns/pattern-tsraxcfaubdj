import { PitchValueScale, Sound, Voice } from '@musical-patterns/material'
import { as, ContourPiece, Ordinal } from '@musical-patterns/utilities'
import {
    HALF_NOTE,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    thunkBassContourPieces,
    WHOLE_NOTE,
    YerExceptionPitchClass,
    yerExceptionPitchClassIndex,
    YerPitchClass,
    yerPitchClassIndex,
    YER_EXCEPTION_SCALE_INDEX,
    YER_SCALE_INDEX,
} from '../../../../src/indexForTest'
import { testEveryStepIsSimple } from '../../../support/helpers'

describe('bass pieces', (): void => {
    it('almost every interval is a simple 11, 13, 17, or 19', async (done: DoneFn): Promise<void> => {
        const FROM_THE_OPENING_REST: number = 0
        const exceptionalIndices: Array<Ordinal<Sound[]>> = [ FROM_THE_OPENING_REST ].map((numeral: number): Ordinal<Sound[]> => as.Ordinal<Sound[]>(numeral))

        const INDEX_OF_BASS_VOICE: Ordinal<Voice[]> = as.Ordinal<Voice[]>(1)
        await testEveryStepIsSimple(INDEX_OF_BASS_VOICE, exceptionalIndices)
        done()
    })

    it('based on all of those comma shifts, it comes out like this', (): void => {
        expect(thunkBassContourPieces())
            .toEqual(
                [
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._1), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._1), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._11), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._11_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._1), HALF_NOTE, YER_SCALE_INDEX ],
                        [
                            yerExceptionPitchClassIndex(SECOND_OCTAVE, YerExceptionPitchClass._11_11_17),
                            HALF_NOTE,
                            YER_EXCEPTION_SCALE_INDEX,
                        ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._11), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._11_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchClassIndex(SECOND_OCTAVE, YerPitchClass._13_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                ].map((contourPiece: number[][]): ContourPiece<PitchValueScale> => as.ContourPiece<PitchValueScale>(contourPiece)),
            )
    })
})
