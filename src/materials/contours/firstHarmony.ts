// tslint:disable no-commented-code

import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, to } from '@musical-patterns/utilities'
import { Yer, yer } from '../../custom'
import { YER_SCALE_INDEX } from '../constants'
import { FOURTH_OCTAVE, HALF_NOTE, REST, THIRD_OCTAVE, THREE_WHOLE_NOTES, WHOLE_NOTE } from './constants'

const buildFirstHarmonyContour: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>([
            // 0
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
            // 1
            [ yer(FOURTH_OCTAVE, Yer._1), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 2
            [ yer(FOURTH_OCTAVE, Yer._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 3
            [ yer(FOURTH_OCTAVE, Yer._17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ REST, HALF_NOTE, YER_SCALE_INDEX ],
            // 4
            [ yer(FOURTH_OCTAVE, Yer._17), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 5
            [ yer(FOURTH_OCTAVE, Yer._1), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 6
            [ yer(FOURTH_OCTAVE, Yer._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 7
            [ yer(FOURTH_OCTAVE, Yer._17_19), THREE_WHOLE_NOTES, YER_SCALE_INDEX ],
            // 8
            // 9
            // 10
            [ yer(THIRD_OCTAVE, Yer._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 11
            [ REST, HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._17_19), HALF_NOTE, YER_SCALE_INDEX ],
            // 12
            [ yer(FOURTH_OCTAVE, Yer._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 13
            [ yer(FOURTH_OCTAVE, Yer._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 14
            [ yer(THIRD_OCTAVE, Yer._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 15
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
            // 16
            [ yer(THIRD_OCTAVE, Yer._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ REST, HALF_NOTE, YER_SCALE_INDEX ],
            // 17
            [ yer(FOURTH_OCTAVE, Yer._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 18
            [ yer(THIRD_OCTAVE, Yer._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 19
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
            // 20
            [ yer(THIRD_OCTAVE, Yer._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ REST, HALF_NOTE, YER_SCALE_INDEX ],
            // 21
            [ yer(FOURTH_OCTAVE, Yer._13_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 22
            [ yer(FOURTH_OCTAVE, Yer._17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(FOURTH_OCTAVE, Yer._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            // 23
            [ yer(FOURTH_OCTAVE, Yer._17), WHOLE_NOTE, YER_SCALE_INDEX ],
        ])

export {
    buildFirstHarmonyContour,
}
