import { STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import { as, Thunk } from '@musical-patterns/utilities'
import { YER_SCALE_INDEX } from '../constants'
import { YerPitchClass, yerPitchClassIndex } from '../custom'
import { FOURTH_OCTAVE, QUARTER_NOTE, WHOLE_NOTE } from './constants'

const introLead: Thunk<number[][][]> =
    (): number[][][] => [
        [
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchClassIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const introRest: Thunk<number[][][]> =
    (): number[][][] => [
        [
            [ as.number(STANDARD_PITCH_INDEX_INDICATING_REST), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

export {
    introLead,
    introRest,
}
