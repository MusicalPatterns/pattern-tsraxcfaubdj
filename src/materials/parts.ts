import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf } from '@musical-patterns/utilities'
import { buildBassContour, buildFirstHarmonyContour, buildLeadContour, buildSecondHarmonyContour } from './contours'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const leadPart: NoteSpec[] = buildLeadContour()
            .map(buildNoteSpec)
        const firstHarmonyPart: NoteSpec[] = buildFirstHarmonyContour()
            .map(buildNoteSpec)
        const secondHarmonyPart: NoteSpec[] = buildSecondHarmonyContour()
            .map(buildNoteSpec)
        const bassPart: NoteSpec[] = buildBassContour()
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
