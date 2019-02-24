import { PitchDurationScale, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/pattern'
import { from, Ordinal, to } from '@musical-patterns/utilities'
import {
    buildBassContourPieces,
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
import { testEveryIntervalIsSimple } from './helpers'

describe('bass pieces', () => {
    it('almost every interval is a simple 11, 13, 17, or 19', async (done: DoneFn) => {
        const FROM_THE_OPENING_REST: number = 0
        const exceptionalIndices: Ordinal[] = [ FROM_THE_OPENING_REST ].map(to.Ordinal)

        const INDEX_OF_BASS_THREAD_SPEC: Ordinal = to.Ordinal(1)
        await testEveryIntervalIsSimple(INDEX_OF_BASS_THREAD_SPEC, exceptionalIndices)
        done()
    })

    it('based on all of those comma shifts, it comes out like this', () => {
        expect(buildBassContourPieces())
            .toEqual(
                [
                    [
                        [ from.Ordinal(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
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
