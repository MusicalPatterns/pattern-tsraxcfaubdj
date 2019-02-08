// tslint:disable

import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDurationScale } from '@musical-patterns/pattern'
import { DictionaryOf, to } from '@musical-patterns/utilities'
import { Yer, yer } from '../custom'
import { yerException } from '../custom/pitchClasses'
import { YerException } from '../custom/types'
import { YER_EXCEPTION_SCALE_INDEX, YER_SCALE_INDEX } from './constants'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const leadPart: NoteSpec[] = to.ContourWhole<PitchDurationScale>([
            // 0
            [ yer(4, Yer._17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_19), 1, YER_SCALE_INDEX ],

            // 1
            [ yer(4, Yer._11_13), 4, YER_SCALE_INDEX ],

            // 2
            [ yer(4, Yer._11_13_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_17_19), 1, YER_SCALE_INDEX ],

            // 3
            [ yer(5, Yer._17_19), 1, YER_SCALE_INDEX ],
            [ yer(5, Yer._13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 2, YER_SCALE_INDEX ],

            // 4
            [ yer(4, Yer._17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_19), 1, YER_SCALE_INDEX ],

            // 5
            [ yer(4, Yer._11_13), 4, YER_SCALE_INDEX ],

            // 6
            [ yer(4, Yer._11_13_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_17_19), 1, YER_SCALE_INDEX ],

            // 7
            [ yer(5, Yer._17_19), 3, YER_SCALE_INDEX ],
            [ yer(5, Yer._17_19), 3, YER_SCALE_INDEX ],

            // 8
            [ yer(5, Yer._17_19), 3, YER_SCALE_INDEX ],

            // 9
            [ yer(5, Yer._17_19), 3, YER_SCALE_INDEX ],

            // 10
            [ yer(5, Yer._11_17_19), 4, YER_SCALE_INDEX ],

            // 11
            [ yer(5, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(5, Yer._13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(5, Yer._17_19), 3, YER_SCALE_INDEX ],

            // 12
            [ yer(5, Yer._13_17_19), 3, YER_SCALE_INDEX ],

            // 13
            [ yer(4, Yer._13), 4, YER_SCALE_INDEX ],

            // 14
            [ yer(4, Yer._11_17_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_19), 1, YER_SCALE_INDEX ],

            // 15
            [ yer(4, Yer._11_13), 4, YER_SCALE_INDEX ],

            // 16
            [ yer(4, Yer._11_13_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13), 2, YER_SCALE_INDEX ],

            // 17
            [ yer(4, Yer._11_13_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 2, YER_SCALE_INDEX ],

            // 18
            [ yer(4, Yer._11_17_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_19), 1, YER_SCALE_INDEX ],

            // 19
            [ yer(4, Yer._11_13), 4, YER_SCALE_INDEX ],

            // 20
            [ yer(4, Yer._11_13_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13), 2, YER_SCALE_INDEX ],

            // 21
            [ yer(4, Yer._11_13_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(5, Yer._13_17_19), 1, YER_SCALE_INDEX ],

            // 22
            [ yer(5, Yer._17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 2, YER_SCALE_INDEX ],

            // 23
            [ yer(4, Yer._17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 1, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_19), 1, YER_SCALE_INDEX ],
        ]).map(buildNoteSpec)

        const firstHarmonyPart: NoteSpec[] = to.ContourWhole<PitchDurationScale>([
            // 0
            [ 0, 4, YER_SCALE_INDEX ],

            // 1
            [ yer(4, Yer._1), 4, YER_SCALE_INDEX ],

            // 2
            [ yer(4, Yer._13_17_19), 4, YER_SCALE_INDEX ],

            // 3
            [ yer(4, Yer._17_19), 2, YER_SCALE_INDEX ],
            [ 0, 2, YER_SCALE_INDEX ],

            // 4
            [ yer(4, Yer._17), 4, YER_SCALE_INDEX ],

            // 5
            [ yer(4, Yer._1), 4, YER_SCALE_INDEX ],

            // 6
            [ yer(4, Yer._13_17_19), 4, YER_SCALE_INDEX ],

            // 7
            [ yer(4, Yer._17_19), 12, YER_SCALE_INDEX ],

            // 8

            // 9

            // 10
            [ yer(3, Yer._11_17_19), 4, YER_SCALE_INDEX ],

            // 11
            [ 0, 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._17_19), 2, YER_SCALE_INDEX ],

            // 12
            [ yer(4, Yer._13_17_19), 4, YER_SCALE_INDEX ],

            // 13
            [ yer(4, Yer._17_19), 4, YER_SCALE_INDEX ],

            // 14
            [ yer(3, Yer._11_17_19), 4, YER_SCALE_INDEX ],

            // 15
            [ 0, 4, YER_SCALE_INDEX ],

            // 16
            [ yer(3, Yer._11_17_19), 2, YER_SCALE_INDEX ],
            [ 0, 2, YER_SCALE_INDEX ],

            // 17
            [ yer(4, Yer._13_17_19), 4, YER_SCALE_INDEX ],

            // 18
            [ yer(3, Yer._11_17_19), 4, YER_SCALE_INDEX ],

            // 19
            [ 0, 4, YER_SCALE_INDEX ],

            // 20
            [ yer(3, Yer._11_17_19), 2, YER_SCALE_INDEX ],
            [ 0, 2, YER_SCALE_INDEX ],

            // 21
            [ yer(4, Yer._13_17_19), 4, YER_SCALE_INDEX ],

            // 22
            [ yer(4, Yer._17_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 2, YER_SCALE_INDEX ],

            // 23
            [ yer(4, Yer._17), 4, YER_SCALE_INDEX ],
        ]).map(buildNoteSpec)

        const secondHarmonyPart: NoteSpec[] = to.ContourWhole<PitchDurationScale>([
            // 0
            [ 0, 4, YER_SCALE_INDEX ],

            // 1
            [ yer(4, Yer._11_13), 4, YER_SCALE_INDEX ],

            // 2
            [ yer(4, Yer._11_13_19), 4, YER_SCALE_INDEX ],

            // 3
            [ 0, 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 2, YER_SCALE_INDEX ],

            // 4
            [ yer(4, Yer._17_19), 4, YER_SCALE_INDEX ],

            // 5
            [ yer(4, Yer._11_13), 4, YER_SCALE_INDEX ],

            // 6
            [ yer(4, Yer._11_13_19), 4, YER_SCALE_INDEX ],

            // 7
            [ yer(4, Yer._17_19), 12, YER_SCALE_INDEX ],

            // 8

            // 9

            // 10
            [ 0, 4, YER_SCALE_INDEX ],

            // 11
            [ yer(4, Yer._11_13_17_19), 2, YER_SCALE_INDEX ],
            [ 0, 2, YER_SCALE_INDEX ],

            // 12
            [ yer(4, Yer._11_13_19), 4, YER_SCALE_INDEX ],

            // 13
            [ 0, 4, YER_SCALE_INDEX ],

            // 14
            [ 0, 4, YER_SCALE_INDEX ],

            // 15
            [ yer(4, Yer._11_13), 4, YER_SCALE_INDEX ],

            // 16
            [ yer(4, Yer._11_13_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13), 2, YER_SCALE_INDEX ],

            // 17
            [ yer(4, Yer._11_13_19), 4, YER_SCALE_INDEX ],

            // 18
            [ 0, 4, YER_SCALE_INDEX ],

            // 19
            [ yer(4, Yer._11_13), 4, YER_SCALE_INDEX ],

            // 20
            [ yer(4, Yer._11_13_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13), 2, YER_SCALE_INDEX ],

            // 21
            [ yer(4, Yer._11_13_19), 4, YER_SCALE_INDEX ],

            // 22
            [ yer(4, Yer._17_19), 2, YER_SCALE_INDEX ],
            [ yer(4, Yer._11_13_17_19), 2, YER_SCALE_INDEX ],

            // 23
            [ yer(4, Yer._17_19), 4, YER_SCALE_INDEX ],
        ]).map(buildNoteSpec)

        const bassPart: NoteSpec[] = to.ContourWhole<PitchDurationScale>([
            // 0
            [ 0, 4, YER_SCALE_INDEX ],

            // 1
            [ yer(2, Yer._13), 4, YER_SCALE_INDEX ],

            // 2
            [ yer(2, Yer._13_19), 4, YER_SCALE_INDEX ],

            // 3
            [ yer(3, Yer._19), 2, YER_SCALE_INDEX ],
            [ yer(3, Yer._11_13_17), 2, YER_SCALE_INDEX ],

            // 4
            [ yer(2, Yer._13_17), 4, YER_SCALE_INDEX ],

            // 5
            [ yer(2, Yer._13), 4, YER_SCALE_INDEX ],

            // 6
            [ yer(2, Yer._13_19), 4, YER_SCALE_INDEX ],

            // 7
            [ yer(3, Yer._19), 4, YER_SCALE_INDEX ],

            // 8
            [ yer(3, Yer._1), 4, YER_SCALE_INDEX ],

            // 9
            [ yer(3, Yer._17), 4, YER_SCALE_INDEX ],

            // 10
            [ yer(3, Yer._11_17), 4, YER_SCALE_INDEX ],

            // 11
            [ yer(3, Yer._11_13_17), 2, YER_SCALE_INDEX ],
            [ yer(3, Yer._19), 2, YER_SCALE_INDEX ],

            // 12
            [ yer(3, Yer._1), 4, YER_SCALE_INDEX ],

            // 13
            [ yer(3, Yer._17), 4, YER_SCALE_INDEX ],

            // 14
            [ yer(2, Yer._11_17), 4, YER_SCALE_INDEX ],

            // 15
            [ yer(2, Yer._11), 4, YER_SCALE_INDEX ],

            // 16
            [ yer(2, Yer._11_19), 2, YER_SCALE_INDEX ],
            [ yer(2, Yer._13), 2, YER_SCALE_INDEX ],

            // 17
            [ yer(2, Yer._1), 2, YER_SCALE_INDEX ],
            [ yerException(2, YerException._11_11_17), 2, YER_EXCEPTION_SCALE_INDEX ],

            // 18
            [ yer(2, Yer._11_17), 4, YER_SCALE_INDEX ],

            // 19
            [ yer(2, Yer._11), 4, YER_SCALE_INDEX ],

            // 20
            [ yer(2, Yer._11_19), 2, YER_SCALE_INDEX ],
            [ yer(2, Yer._13), 2, YER_SCALE_INDEX ],

            // 21
            [ yer(2, Yer._13_19), 4, YER_SCALE_INDEX ],

            // 22
            [ yer(3, Yer._19), 2, YER_SCALE_INDEX ],
            [ yer(3, Yer._11_13_17), 2, YER_SCALE_INDEX ],

            // 23
            [ yer(2, Yer._13_17), 4, YER_SCALE_INDEX ],
        ]).map(buildNoteSpec)

        return {
            bassPart,
            leadPart,
            secondHarmonyPart,
            firstHarmonyPart,
        }
    }

export {
    buildParts,
}
