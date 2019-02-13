import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, to } from '@musical-patterns/utilities'
import { Yer, yer } from '../../custom'
import { YER_SCALE_INDEX } from '../constants'
import { DOTTED_HALF_NOTE, FIFTH_OCTAVE, FOURTH_OCTAVE, HALF_NOTE, QUARTER_NOTE, WHOLE_NOTE } from './constants'

const buildLeadContour: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>([
            // 0
            [ yer(FOURTH_OCTAVE, Yer._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            // 1
            [ yer(FOURTH_OCTAVE, Yer._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 2
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            // 3
            [ yer(FIFTH_OCTAVE, Yer._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FIFTH_OCTAVE, Yer._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            // 4
            [ yer(FOURTH_OCTAVE, Yer._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            // 5
            [ yer(FOURTH_OCTAVE, Yer._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 6
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            // 7
            [ yer(FIFTH_OCTAVE, Yer._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FIFTH_OCTAVE, Yer._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
            // 8
            [ yer(FIFTH_OCTAVE, Yer._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
            // 9
            [ yer(FIFTH_OCTAVE, Yer._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
            // 10
            [ yer(FIFTH_OCTAVE, Yer._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 11
            [ yer(FIFTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FIFTH_OCTAVE, Yer._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FIFTH_OCTAVE, Yer._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
            // 12
            [ yer(FIFTH_OCTAVE, Yer._13_17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
            // 13
            [ yer(FOURTH_OCTAVE, Yer._13), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 14
            [ yer(FOURTH_OCTAVE, Yer._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            // 15
            [ yer(FOURTH_OCTAVE, Yer._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 16
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13), HALF_NOTE, YER_SCALE_INDEX ],
            // 17
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            // 18
            [ yer(FOURTH_OCTAVE, Yer._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            // 19
            [ yer(FOURTH_OCTAVE, Yer._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 20
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13), HALF_NOTE, YER_SCALE_INDEX ],
            // 21
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FIFTH_OCTAVE, Yer._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            // 22
            [ yer(FIFTH_OCTAVE, Yer._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            // 23
            [ yer(FOURTH_OCTAVE, Yer._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ])

export {
    buildLeadContour,
}
