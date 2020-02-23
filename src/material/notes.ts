import { Note } from '@musical-patterns/material'
import { Thunk } from '@musical-patterns/utilities'
import { computeNote } from './features'
import { TsraxcfaubdjNotes } from './types'
import {
    thunkBassContourWhole,
    thunkFirstHarmonyContourWhole,
    thunkLeadContourWhole,
    thunkLeadIntroContourWhole,
    thunkNonLeadIntroRestContourWhole,
    thunkSecondHarmonyContourWhole,
} from './whole'

const thunkNotes: Thunk<TsraxcfaubdjNotes> =
    (): TsraxcfaubdjNotes => {
        const lead: Note[] = thunkLeadContourWhole()
            .map(computeNote)
        const bass: Note[] = thunkBassContourWhole()
            .map(computeNote)
        const firstHarmony: Note[] = thunkFirstHarmonyContourWhole()
            .map(computeNote)
        const secondHarmony: Note[] = thunkSecondHarmonyContourWhole()
            .map(computeNote)

        const leadIntro: Note[] = thunkLeadIntroContourWhole()
            .map(computeNote)
        const nonLeadIntroRest: Note[] = thunkNonLeadIntroRestContourWhole()
            .map(computeNote)

        return {
            bass,
            firstHarmony,
            lead,
            leadIntro,
            nonLeadIntroRest,
            secondHarmony,
        }
    }

export {
    thunkNotes,
}
