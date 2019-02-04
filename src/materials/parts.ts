// tslint:disable

import { NoteSpec } from '@musical-patterns/compiler'
import { StandardContour } from '@musical-patterns/pattern'
import { DictionaryOf, to } from '@musical-patterns/utilities'
import { Yer, yer } from '../custom'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const mainPart: NoteSpec[] = to.ContourWhole<StandardContour>([
            // 0
            [ yer(4, Yer._17_19), 1 ],
            [ yer(4, Yer._13_17_19), 1 ],
            [ yer(4, Yer._11_13_17_19), 1 ],
            [ yer(4, Yer._11_13_19), 1 ],

            // 1
            [ yer(4, Yer._11_13), 4 ],

            // 2
            [ yer(4, Yer._11_13_19), 2 ],
            [ yer(4, Yer._11_13_17_19), 1 ],
            [ yer(4, Yer._11_17_19), 1 ],

            // 3
            [ yer(5, Yer._17_19), 1 ],
            [ yer(5, Yer._13_17_19), 1 ],
            [ yer(4, Yer._11_13_17_19), 2 ],

            // 4
            [ yer(4, Yer._17_19), 1 ],
            [ yer(4, Yer._13_17_19), 1 ],
            [ yer(4, Yer._11_13_17_19), 1 ],
            [ yer(4, Yer._11_13_19), 1 ],

            // 5
            [ yer(4, Yer._11_13), 4 ],

            // 6
            [ yer(4, Yer._11_13_19), 2 ],
            [ yer(4, Yer._11_13_17_19), 1 ],
            [ yer(4, Yer._11_17_19), 1 ],

            // 7
            [ yer(5, Yer._17_19), 4 ],

            // 8
            [ yer(5, Yer._17_19), 4 ],

            // 9
            [ yer(5, Yer._17_19), 4 ],

            // 10
            [ yer(5, Yer._11_17_19), 4 ],

            // 11
            [ yer(5, Yer._11_13_17_19), 1 ],
            [ yer(5, Yer._13_17_19), 1 ],
            [ yer(5, Yer._17_19), 3 ],

            // 12
            [ yer(5, Yer._13_17_19), 3 ],

            // 13
            [ yer(4, Yer._13), 4 ],

            // 14
            [ yer(4, Yer._11_17_19), 2 ],
            [ yer(4, Yer._11_13_17_19), 1 ],
            [ yer(4, Yer._11_13_19), 1 ],

            // 15
            [ yer(4, Yer._11_13), 4 ],

            // 16
            [ yer(4, Yer._11_13_19), 2 ],
            [ yer(4, Yer._11_13), 2 ],

            // 17
            [ yer(4, Yer._11_13_19), 2 ],
            [ yer(4, Yer._11_13_17_19), 2 ],

            // 18
            [ yer(4, Yer._11_17_19), 2 ],
            [ yer(4, Yer._11_13_17_19), 1 ],
            [ yer(4, Yer._11_13_19), 1 ],

            // 19
            [ yer(4, Yer._11_13), 4 ],

            // 20
            [ yer(4, Yer._11_13_19), 2 ],
            [ yer(4, Yer._11_13), 2 ],

            // 21
            [ yer(4, Yer._11_13_19), 2 ],
            [ yer(4, Yer._11_13_17_19), 1 ],
            [ yer(5, Yer._13_17_19), 1 ],

            // 22
            [ yer(5, Yer._17_19), 1 ],
            [ yer(4, Yer._11_17_19), 1 ],
            [ yer(4, Yer._11_13_17_19), 2 ],

            // 23
            [ yer(4, Yer._17_19), 1 ],
            [ yer(4, Yer._13_17_19), 1 ],
            [ yer(4, Yer._11_13_17_19), 1 ],
            [ yer(4, Yer._11_13_19), 1 ],
        ]).map(buildNoteSpec)

        const supportPart: NoteSpec[] = to.ContourWhole<StandardContour>([
            // 0
            [ 0, 4 ],

            // 1
            [ yer(4, Yer._1), 4 ],

            // 2
            [ yer(4, Yer._13_17_19), 4 ],

            // 3
            [ yer(4, Yer._17_19), 2 ],
            [ 0, 2 ],

            // 4
            [ yer(4, Yer._17), 4 ],

            // 5
            [ yer(4, Yer._1), 4 ],

            // 6
            [ yer(4, Yer._13_17_19), 4 ],

            // 7
            [ yer(4, Yer._17_19), 4 ],

            // 8
            [ yer(4, Yer._17_19), 4 ],

            // 9
            [ yer(4, Yer._17_19), 4 ],

            // 10
            [ yer(3, Yer._11_17_19), 4 ],

            // 11
            [ 0, 2 ],
            [ yer(4, Yer._17_19), 2 ],

            // 12
            [ yer(4, Yer._13_17_19), 4 ],

            // 13
            [ yer(4, Yer._17_19), 4 ],

            // 14
            [ yer(3, Yer._11_17_19), 4 ],

            // 15
            [ 0, 4 ],

            // 16
            [ yer(3, Yer._11_17_19), 2 ],
            [ 0, 2 ],

            // 17
            [ yer(4, Yer._13_17_19), 4 ],

            // 18
            [ yer(3, Yer._11_17_19), 4 ],

            // 19
            [ 0, 4 ],

            // 20
            [ yer(3, Yer._11_17_19), 2 ],
            [ 0, 2 ],

            // 21
            [ yer(4, Yer._13_17_19), 4 ],

            // 22
            [ yer(4, Yer._17_19), 2 ],
            [ yer(4, Yer._11_13_17_19), 2 ],

            // 23
            [ yer(4, Yer._17), 4 ],
        ]).map(buildNoteSpec)

        const secondSupportPart: NoteSpec[] = to.ContourWhole<StandardContour>([
            // 0
            [ 0, 4 ],

            // 1
            [ yer(4, Yer._11_13), 4 ],

            // 2
            [ yer(4, Yer._11_13_19), 4 ],

            // 3
            [ 0, 2 ],
            [ yer(4, Yer._11_13_17_19), 2 ],

            // 4
            [ yer(4, Yer._17_19), 4 ],

            // 5
            [ yer(4, Yer._11_13), 4 ],

            // 6
            [ yer(4, Yer._11_13_19), 4 ],

            // 7
            [ yer(4, Yer._17_19), 4 ],

            // 8
            [ yer(4, Yer._17_19), 4 ],

            // 9
            [ yer(4, Yer._17_19), 4 ],

            // 10
            [ 0, 4 ],

            // 11
            [ yer(4, Yer._11_13_17_19), 2 ],
            [ 0, 2 ],

            // 12
            [ yer(4, Yer._11_13_19), 4 ],

            // 13
            [ 0, 4 ],

            // 14
            [ 0, 4 ],

            // 15
            [ yer(4, Yer._11_13), 4 ],

            // 16
            [ yer(4, Yer._11_13_19), 2 ],
            [ yer(4, Yer._11_13), 2 ],

            // 17
            [ yer(4, Yer._11_13_19), 4 ],

            // 18
            [ 0, 4 ],

            // 19
            [ yer(4, Yer._11_13), 4 ],

            // 20
            [ yer(4, Yer._11_13_19), 2 ],
            [ yer(4, Yer._11_13), 2 ],

            // 21
            [ yer(4, Yer._11_13_19), 4 ],

            // 22
            [ yer(4, Yer._17_19), 2 ],
            [ yer(4, Yer._11_13_17_19), 2 ],

            // 23
            [ yer(4, Yer._17_19), 4 ],
        ]).map(buildNoteSpec)

        const bassPart: NoteSpec[] = to.ContourWhole<StandardContour>([
            // 0
            [ 0, 4 ],

            // 1
            [ yer(2, Yer._13), 4 ],

            // 2
            [ yer(2, Yer._13_19), 4 ],

            // 3
            [ yer(3, Yer._19), 2 ],
            [ yer(3, Yer._11_13_17), 2 ],

            // 4
            [ yer(2, Yer._13_17), 4 ],

            // 5
            [ yer(2, Yer._13), 4 ],

            // 6
            [ yer(2, Yer._13_19), 4 ],

            // 7
            [ yer(3, Yer._19), 4 ],

            // 8
            [ yer(3, Yer._1), 4 ],

            // 9
            [ yer(3, Yer._17), 4 ],

            // 10
            [ yer(3, Yer._11_17), 4 ],

            // 11
            [ yer(3, Yer._11_13_17), 2 ],
            [ yer(3, Yer._19), 2 ],

            // 12
            [ yer(3, Yer._1), 4 ],

            // 13
            [ yer(3, Yer._17), 4 ],

            // 14
            [ yer(2, Yer._11_17), 4 ],

            // 15
            [ yer(2, Yer._11), 4 ],

            // 16
            [ yer(2, Yer._11_19), 2 ],
            [ yer(2, Yer._13), 2 ],

            // 17
            [ yer(2, Yer._1), 2 ],
            [ yer(2, Yer._1), 2 ], // actually supposed to be _11_11_17

            // 18
            [ yer(2, Yer._11_17), 4 ],

            // 19
            [ yer(2, Yer._11), 4 ],

            // 20
            [ yer(2, Yer._11_19), 2 ],
            [ yer(2, Yer._13), 2 ],

            // 21
            [ yer(2, Yer._13_19), 4 ],

            // 22
            [ yer(3, Yer._19), 2 ],
            [ yer(3, Yer._11_13_17), 2 ],

            // 23
            [ yer(2, Yer._13_17), 4 ],
        ]).map(buildNoteSpec)

        return {
            bassPart,
            mainPart,
            secondSupportPart,
            supportPart,
        }
    }

export {
    buildParts,
}
