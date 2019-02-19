import { NO_TRANSLATION, to } from '@musical-patterns/utilities'
import {
    buildYerBlumeyerCommaPump,
    buildYerBlumeyerCommaPumpInstructions,
    HALF_NOTE,
    rawPiecesFromPump,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    WHOLE_NOTE,
    YER_SCALE_INDEX,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpOperation,
    YerPitchClass,
    yerPitchIndex,
} from '../../../../src/indexForTest'

describe('raw pieces from pump', () => {
    it('given a comma pump, returns the raw pieces to be cast to contour pieces', () => {
        const actual: number[][][] = rawPiecesFromPump(
            buildYerBlumeyerCommaPump(
                buildYerBlumeyerCommaPumpInstructions({
                    cycling: NO_TRANSLATION,
                    family: YerBlumeyerCommaPumpFamily.A,
                    operation: YerBlumeyerCommaPumpOperation.CONVERSE,
                }),
                to.Ordinal(2),
            ),
            [ SECOND_OCTAVE, SECOND_OCTAVE, THIRD_OCTAVE, SECOND_OCTAVE ],
        )

        expect(actual)
            .toEqual(
                [
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                ],
            )
    })
})
