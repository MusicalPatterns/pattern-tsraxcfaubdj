import { NoteSpec } from '@musical-patterns/compiler'
import { buildNoteSpec } from './notes'
import { TsraxcfaubdjParts } from './types'
import {
    buildBassContourWhole,
    buildFirstHarmonyContourWhole,
    buildLeadContourWhole,
    buildSecondHarmonyContourWhole,
} from './wholes'

const buildParts: () => TsraxcfaubdjParts =
    (): TsraxcfaubdjParts => {
        const lead: NoteSpec[] = buildLeadContourWhole()
            .map(buildNoteSpec)
        const bass: NoteSpec[] = buildBassContourWhole()
            .map(buildNoteSpec)
        const firstHarmony: NoteSpec[] = buildFirstHarmonyContourWhole()
            .map(buildNoteSpec)
        const secondHarmony: NoteSpec[] = buildSecondHarmonyContourWhole()
            .map(buildNoteSpec)

        return {
            bass,
            firstHarmony,
            lead,
            secondHarmony,
        }
    }

export {
    buildParts,
}
