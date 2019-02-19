// tslint:disable max-file-line-count

import { YerExceptionPitchClass, yerExceptionPitchIndex, YerPitchClass, yerPitchIndex } from '../../custom'
import { YER_EXCEPTION_SCALE_INDEX, YER_SCALE_INDEX } from '../constants'
import {
    FIFTH_OCTAVE,
    FOURTH_OCTAVE,
    HALF_NOTE,
    QUARTER_NOTE, REST,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    WHOLE_NOTE,
} from './constants'

const quietudeLead: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietudeEndingToLoopLead: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietudeEndingToEscapeLead: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietudePump: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._1), HALF_NOTE, YER_SCALE_INDEX ],
            [
                yerExceptionPitchIndex(SECOND_OCTAVE, YerExceptionPitchClass._11_11_17),
                HALF_NOTE,
                YER_EXCEPTION_SCALE_INDEX,
            ],
        ],
        [
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietudeFirstHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ REST, HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietudeSecondHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

export {
    quietudeLead,
    quietudeEndingToLoopLead,
    quietudeEndingToEscapeLead,
    quietudePump,
    quietudeFirstHarmony,
    quietudeSecondHarmony,
}
