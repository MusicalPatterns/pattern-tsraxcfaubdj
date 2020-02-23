import { STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import { as, Thunk } from '@musical-patterns/utilities'
import { YER_SCALE_INDEX } from '../constants'
import { YerPitchClass, yerPitchClassIndex } from '../custom'
import {
    DOTTED_HALF_NOTE,
    FIFTH_OCTAVE,
    FOURTH_OCTAVE,
    HALF_NOTE,
    QUARTER_NOTE,
    THIRD_OCTAVE,
    WHOLE_NOTE,
} from './constants'

const desperationLead: Thunk<number[][][]> =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const desperationFirstHarmony: Thunk<number[][][]> =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(THIRD_OCTAVE, YerPitchClass._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const desperationSecondHarmony: Thunk<number[][][]> =
    (): number[][][] => [
        [
            [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

export {
    desperationLead,
    desperationFirstHarmony,
    desperationSecondHarmony,
}
