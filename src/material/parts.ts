import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf } from '@musical-patterns/utilities'
import { buildNoteSpec } from './notes'
import {
    buildBassContourWhole,
    buildFirstHarmonyContourWhole,
    buildLeadContourWhole,
    buildSecondHarmonyContourWhole,
} from './wholes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const leadPart: NoteSpec[] = buildLeadContourWhole()
            .map(buildNoteSpec)
        const bassPart: NoteSpec[] = buildBassContourWhole()
            .map(buildNoteSpec)
        const firstHarmonyPart: NoteSpec[] = buildFirstHarmonyContourWhole()
            .map(buildNoteSpec)
        const secondHarmonyPart: NoteSpec[] = buildSecondHarmonyContourWhole()
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
