import { to } from '@musical-patterns/utilities'
import {
    buildYerBlumeyerCommaPump,
    buildYerBlumeyerCommaPumpInstructions,
    rawPiecesFromPump,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpOperation,
    YerPitchClass,
    yerPitchIndex,
} from '../../custom'
import { YER_SCALE_INDEX } from '../constants'
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
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const suspensionPump: (parameters?: { transposeThirdStepDown?: boolean }) => number[][][] =
    ({ transposeThirdStepDown = false }: { transposeThirdStepDown?: boolean } = {}): number[][][] =>
        rawPiecesFromPump(
            buildYerBlumeyerCommaPump(
                buildYerBlumeyerCommaPumpInstructions({
                    cycling: to.Translation(1),
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
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), THREE_WHOLE_NOTES, YER_SCALE_INDEX ],
        ],
        [],
        [],
    ]

const suspensionSecondHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), THREE_WHOLE_NOTES, YER_SCALE_INDEX ],
        ],
        [],
        [],
    ]

export {
    suspensionLead,
    suspensionPump,
    suspensionFirstHarmony,
    suspensionSecondHarmony,
}
