import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/material'
import { ONCE } from '@musical-patterns/utilities'
import { thunkNotes } from './notes'
import { TsraxcfaubdjNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: TsraxcfaubdjNotes = thunkNotes()

        const leadEntity: Entity = {
            sections: [
                {
                    notes: notes.leadIntro,
                    repetitions: ONCE,
                },
                { notes: notes.lead },
            ],
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }

        const bassEntity: Entity = {
            sections: [
                {
                    notes: notes.nonLeadIntroRest,
                    repetitions: ONCE,
                },
                { notes: notes.bass },
            ],
            timbreName: TimbreNameEnum.ORGAN_2,
        }

        const firstHarmonyEntity: Entity = {
            sections: [
                {
                    notes: notes.nonLeadIntroRest,
                    repetitions: ONCE,
                },
                { notes: notes.firstHarmony },
            ],
            timbreName: TimbreNameEnum.CELESTE,
        }

        const secondHarmonyEntity: Entity = {
            sections: [
                {
                    notes: notes.nonLeadIntroRest,
                    repetitions: ONCE,
                },
                { notes: notes.secondHarmony },
            ],
            timbreName: TimbreNameEnum.ETHNIC_33,
        }

        return [
            leadEntity,
            bassEntity,
            secondHarmonyEntity,
            firstHarmonyEntity,
        ]
    }

export {
    materializeEntities,
}
