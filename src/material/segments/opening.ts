import { STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/pattern'
import { from, NO_TRANSLATION } from '@musical-patterns/utilities'
import { YER_SCALE_INDEX } from '../constants'
import {
    computeYerBlumeyerCommaPump,
    computeYerBlumeyerCommaPumpInstructions,
    rawPiecesFromPump,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpOperation,
    YerPitchClass,
    yerPitchClassIndex,
} from '../custom'
import {
    FIRST_PUMP_ROTATION,
    FOURTH_OCTAVE,
    HALF_NOTE,
    QUARTER_NOTE,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    WHOLE_NOTE,
} from './constants'

const openingLead: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingRest: () => number[][][] =
    (): number[][][] => [
        [
            [ from.Ordinal(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingBassPump: () => number[][][] =
    (): number[][][] =>
        rawPiecesFromPump(
            computeYerBlumeyerCommaPump(
                computeYerBlumeyerCommaPumpInstructions({
                    cycling: NO_TRANSLATION,
                    family: YerBlumeyerCommaPumpFamily.A,
                    operation: YerBlumeyerCommaPumpOperation.CONVERSE,
                }),
                FIRST_PUMP_ROTATION,
            ),
            [ SECOND_OCTAVE, SECOND_OCTAVE, THIRD_OCTAVE, SECOND_OCTAVE ],
        )

const thirdStepOfOpeningBassPumpIfItDidNotCommaShift: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingFirstHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._1), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingSecondHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

export {
    openingLead,
    openingRest,
    openingBassPump,
    thirdStepOfOpeningBassPumpIfItDidNotCommaShift,
    openingFirstHarmony,
    openingSecondHarmony,
}
