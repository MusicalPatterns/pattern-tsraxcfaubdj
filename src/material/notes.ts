import { Note } from '@musical-patterns/compiler'
import { buildNote } from './features'
import { TsraxcfaubdjNotes } from './types'
import {
    buildBassContourWhole,
    buildFirstHarmonyContourWhole,
    buildLeadContourWhole,
    buildSecondHarmonyContourWhole,
} from './wholes'

const buildNotes: () => TsraxcfaubdjNotes =
    (): TsraxcfaubdjNotes => {
        const lead: Note[] = buildLeadContourWhole()
            .map(buildNote)
        const bass: Note[] = buildBassContourWhole()
            .map(buildNote)
        const firstHarmony: Note[] = buildFirstHarmonyContourWhole()
            .map(buildNote)
        const secondHarmony: Note[] = buildSecondHarmonyContourWhole()
            .map(buildNote)

        return {
            bass,
            firstHarmony,
            lead,
            secondHarmony,
        }
    }

export {
    buildNotes,
}
