import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf, sequence } from '@musical-patterns/utilities'
import {
    buildBassContourPieces,
    buildFirstHarmonyContourPieces,
    buildLeadContourPieces,
    buildSecondHarmonyContourPieces,
} from './contours'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const leadPart: NoteSpec[] = sequence(buildLeadContourPieces())
            .map(buildNoteSpec)
        const firstHarmonyPart: NoteSpec[] = sequence(buildFirstHarmonyContourPieces())
            .map(buildNoteSpec)
        const secondHarmonyPart: NoteSpec[] = sequence(buildSecondHarmonyContourPieces())
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
