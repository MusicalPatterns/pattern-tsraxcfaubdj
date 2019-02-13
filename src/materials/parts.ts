import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf, sequence } from '@musical-patterns/utilities'
import {
    buildBassContourPieces,
    buildFirstHarmonyContour,
    buildLeadContour,
    buildSecondHarmonyContour,
} from './contours'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const leadPart: NoteSpec[] = buildLeadContour()
            .map(buildNoteSpec)
        const firstHarmonyPart: NoteSpec[] = buildFirstHarmonyContour()
            .map(buildNoteSpec)
        const secondHarmonyPart: NoteSpec[] = buildSecondHarmonyContour()
            .map(buildNoteSpec)
        const bassPart: NoteSpec[] = sequence(buildBassContourPieces())
            .map(buildNoteSpec)

        return {
            bassPart,
            firstHarmonyPart,
            leadPart,
            secondHarmonyPart,
        }
    }

export {
    buildParts,
}
