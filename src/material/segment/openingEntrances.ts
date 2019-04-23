import { STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import { notAs, Scalar } from '@musical-patterns/utilities'
import { YER_SCALE_INDEX } from '../constants'
import { YerPitchClass, yerPitchClassIndex } from '../custom'
import { FIFTH_OCTAVE, FOURTH_OCTAVE, HALF_NOTE, QUARTER_NOTE, WHOLE_NOTE } from './constants'

const openingEntranceAsPartOfLoopLead: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntranceLead: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FIFTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntranceAsPartOfLoopFirstHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ notAs.Ordinal<Scalar[]>(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntranceFirstHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [

            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntranceAsPartOfLoopSecondHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ notAs.Ordinal<Scalar[]>(STANDARD_PITCH_INDEX_INDICATING_REST), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntranceSecondHarmony: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

export {
    openingEntranceAsPartOfLoopLead,
    openingEntranceLead,
    openingEntranceAsPartOfLoopFirstHarmony,
    openingEntranceFirstHarmony,
    openingEntranceAsPartOfLoopSecondHarmony,
    openingEntranceSecondHarmony,
}
