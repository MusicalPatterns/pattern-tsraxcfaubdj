import { PitchDurationScale, Sound, Voice } from '@musical-patterns/material'
import { Ordinal, to } from '@musical-patterns/utilities'
import {
    computeBassContourPieces,
    HALF_NOTE,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    WHOLE_NOTE,
    YER_EXCEPTION_SCALE_INDEX,
    YER_SCALE_INDEX,
    YerExceptionPitchClass,
    yerExceptionPitchClassIndex,
    YerPitchClass,
    yerPitchClassIndex,
} from '../../../../src/indexForTest'
import { testEveryIntervalIsSimple } from '../../../support/helpers'

describe('bass pieces', () => {
    it('almost every interval is a simple 11, 13, 17, or 19', async (done: DoneFn) => {
        const FROM_THE_OPENING_REST: number = 0
        const exceptionalIndices: Array<Ordinal<Sound>> = [ FROM_THE_OPENING_REST ].map((value: number) => to.Ordinal<Sound>(value))

        const INDEX_OF_BASS_VOICE: Ordinal<Voice> = to.Ordinal<Voice>(1)
        await testEveryIntervalIsSimple(INDEX_OF_BASS_VOICE, exceptionalIndices)
        done()
    })

    it('based on all of those comma shifts, it comes out like this', () => {
        expect(computeBassContourPieces())
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
                ].map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece)),
            )
    })
})
