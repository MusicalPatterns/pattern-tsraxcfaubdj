import { as, NO_SHIFT } from '@musical-patterns/utilities'
import {
    computeYerBlumeyerCommaPump,
    computeYerBlumeyerCommaPumpInstructions,
    HALF_NOTE,
    rawPiecesFromPump,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    WHOLE_NOTE,
    YER_SCALE_INDEX,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpOperation,
    YerPitchClass,
    yerPitchClassIndex,
} from '../../../../../src/indexForTest'

describe('raw pieces from pump', () => {
    it('given a comma pump, returns the raw pieces to be cast to contour pieces', () => {
        const actual: number[][][] = rawPiecesFromPump(
            computeYerBlumeyerCommaPump(
                computeYerBlumeyerCommaPumpInstructions({
                    cycling: NO_SHIFT,
                    family: YerBlumeyerCommaPumpFamily.A,
                    operation: YerBlumeyerCommaPumpOperation.CONVERSE,
                }),
                as.Ordinal<YerBlumeyerCommaPumpInstruction[]>(2),
            ),
            [ SECOND_OCTAVE, SECOND_OCTAVE, THIRD_OCTAVE, SECOND_OCTAVE ],
        )

        expect(actual)
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
                ],
            )
    })
})
