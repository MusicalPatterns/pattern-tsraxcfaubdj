import { as, Cycle, negative } from '@musical-patterns/utilities'
import { YER_SCALE_INDEX } from '../constants'
import {
    computeYerBlumeyerCommaPump,
    computeYerBlumeyerCommaPumpInstructions,
    rawPiecesFromPump,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpOperation,
    YerPitchClass,
    yerPitchClassIndex,
} from '../custom'
import {
    DOTTED_HALF_NOTE,
    FIFTH_OCTAVE,
    FOURTH_OCTAVE,
    SECOND_OCTAVE,
    SECOND_PUMP_ROTATION,
    THIRD_OCTAVE,
    THREE_WHOLE_NOTES,
} from './constants'

const suspensionLead: () => number[][][] =
    (): number[][][] => [
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
    ]

const suspensionBassPump: (parameters?: { transposeThirdStepDown?: boolean }) => number[][][] =
    ({ transposeThirdStepDown = false }: { transposeThirdStepDown?: boolean } = {}): number[][][] =>
        rawPiecesFromPump(
            computeYerBlumeyerCommaPump(
                computeYerBlumeyerCommaPumpInstructions({
                    cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(negative(1)),
                    family: YerBlumeyerCommaPumpFamily.A,
                    operation: YerBlumeyerCommaPumpOperation.INVERSE,
                }),
                SECOND_PUMP_ROTATION,
            ),
            [ THIRD_OCTAVE, THIRD_OCTAVE, transposeThirdStepDown ? SECOND_OCTAVE : THIRD_OCTAVE, THIRD_OCTAVE ],
        )

const suspensionFirstHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), THREE_WHOLE_NOTES, YER_SCALE_INDEX ],
        ],
        [],
        [],
    ]

const suspensionSecondHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), THREE_WHOLE_NOTES, YER_SCALE_INDEX ],
        ],
        [],
        [],
    ]

export {
    suspensionLead,
    suspensionBassPump,
    suspensionFirstHarmony,
    suspensionSecondHarmony,
}
