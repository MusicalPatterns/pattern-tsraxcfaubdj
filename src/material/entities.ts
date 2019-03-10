import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildNotes } from './notes'
import { TsraxcfaubdjNotes } from './types'

const materializeEntities: () => Entity[] =
    (): Entity[] => {
        const notes: TsraxcfaubdjNotes = buildNotes()

        const leadEntity: Entity = {
            notes: notes.lead,
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }

        const bassEntity: Entity = {
            notes: notes.bass,
            timbreName: TimbreNameEnum.ORGAN_2,
        }

        const firstHarmonyEntity: Entity = {
            notes: notes.firstHarmony,
            timbreName: TimbreNameEnum.CELESTE,
        }

        const secondHarmonyEntity: Entity = {
            notes: notes.secondHarmony,
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
