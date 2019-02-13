import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, to } from '@musical-patterns/utilities'
import { Yer, yer, yerException, YerException } from '../../custom'
import { YER_EXCEPTION_SCALE_INDEX, YER_SCALE_INDEX } from '../constants'
import { HALF_NOTE, REST, SECOND_OCTAVE, THIRD_OCTAVE, WHOLE_NOTE } from './constants'

const buildBassContour: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>([
            // 0
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
            // 1
            [ yer(SECOND_OCTAVE, Yer._13), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 2
            [ yer(SECOND_OCTAVE, Yer._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 3
            [ yer(THIRD_OCTAVE, Yer._19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(THIRD_OCTAVE, Yer._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
            // 4
            [ yer(SECOND_OCTAVE, Yer._13_17), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 5
            [ yer(SECOND_OCTAVE, Yer._13), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 6
            [ yer(SECOND_OCTAVE, Yer._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 7
            [ yer(THIRD_OCTAVE, Yer._19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 8
            [ yer(THIRD_OCTAVE, Yer._1), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 9
            [ yer(THIRD_OCTAVE, Yer._17), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 10
            [ yer(THIRD_OCTAVE, Yer._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 11
            [ yer(THIRD_OCTAVE, Yer._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(THIRD_OCTAVE, Yer._19), HALF_NOTE, YER_SCALE_INDEX ],
            // 12
            [ yer(THIRD_OCTAVE, Yer._1), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 13
            [ yer(THIRD_OCTAVE, Yer._17), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 14
            [ yer(SECOND_OCTAVE, Yer._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 15
            [ yer(SECOND_OCTAVE, Yer._11), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 16
            [ yer(SECOND_OCTAVE, Yer._11_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(SECOND_OCTAVE, Yer._13), HALF_NOTE, YER_SCALE_INDEX ],
            // 17
            [ yer(SECOND_OCTAVE, Yer._1), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerException(SECOND_OCTAVE, YerException._11_11_17), HALF_NOTE, YER_EXCEPTION_SCALE_INDEX ],
            // 18
            [ yer(SECOND_OCTAVE, Yer._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 19
            [ yer(SECOND_OCTAVE, Yer._11), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 20
            [ yer(SECOND_OCTAVE, Yer._11_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(SECOND_OCTAVE, Yer._13), HALF_NOTE, YER_SCALE_INDEX ],
            // 21
            [ yer(SECOND_OCTAVE, Yer._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
            // 22
            [ yer(THIRD_OCTAVE, Yer._19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yer(THIRD_OCTAVE, Yer._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
            // 23
            [ yer(SECOND_OCTAVE, Yer._13_17), WHOLE_NOTE, YER_SCALE_INDEX ],
        ])

export {
    buildBassContour,
}
