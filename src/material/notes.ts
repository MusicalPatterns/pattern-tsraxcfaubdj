import { Note } from '@musical-patterns/compiler'
import { computeNote } from './features'
import { TsraxcfaubdjNotes } from './types'
import {
    computeBassContourWhole,
    computeFirstHarmonyContourWhole,
    computeLeadContourWhole,
    computeSecondHarmonyContourWhole,
} from './whole'

const computeNotes: () => TsraxcfaubdjNotes =
    (): TsraxcfaubdjNotes => {
        const lead: Note[] = computeLeadContourWhole()
            .map(computeNote)
        const bass: Note[] = computeBassContourWhole()
            .map(computeNote)
        const firstHarmony: Note[] = computeFirstHarmonyContourWhole()
            .map(computeNote)
        const secondHarmony: Note[] = computeSecondHarmonyContourWhole()
            .map(computeNote)

        return {
            bass,
            firstHarmony,
            lead,
            secondHarmony,
        }
    }

export {
    computeNotes,
}
