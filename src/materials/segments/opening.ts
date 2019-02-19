import { NO_TRANSLATION } from '@musical-patterns/utilities'
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
    FIRST_PUMP_ROTATION,
    FOURTH_OCTAVE,
    HALF_NOTE,
    QUARTER_NOTE,
    REST,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    WHOLE_NOTE,
} from './constants'

const openingLead: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingRest: () => number[][][] =
    (): number[][][] => [
        [
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingPump: () => number[][][] =
    (): number[][][] =>
        rawPiecesFromPump(
            buildYerBlumeyerCommaPump(
                buildYerBlumeyerCommaPumpInstructions({
                    cycling: NO_TRANSLATION,
                    family: YerBlumeyerCommaPumpFamily.A,
                    operation: YerBlumeyerCommaPumpOperation.CONVERSE,
                }),
                FIRST_PUMP_ROTATION,
            ),
            [ SECOND_OCTAVE, SECOND_OCTAVE, THIRD_OCTAVE, SECOND_OCTAVE ],
        )

const thirdStepOfOpeningPumpIfItDidNotCommaShift: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingFirstHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._1), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingSecondHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

export {
    openingLead,
    openingRest,
    openingPump,
    thirdStepOfOpeningPumpIfItDidNotCommaShift,
    openingFirstHarmony,
    openingSecondHarmony,
}
