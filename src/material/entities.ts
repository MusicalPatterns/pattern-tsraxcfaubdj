import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { computeNotes } from './notes'
import { TsraxcfaubdjNotes } from './types'

const materializeEntities: () => Entity[] =
    (): Entity[] => {
        const notes: TsraxcfaubdjNotes = computeNotes()

        const leadEntity: Entity = {
            sections: [ { notes: notes.lead } ],
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }

        const bassEntity: Entity = {
            sections: [ { notes: notes.bass } ],
            timbreName: TimbreNameEnum.ORGAN_2,
        }

        const firstHarmonyEntity: Entity = {
            sections: [ { notes: notes.firstHarmony } ],
            timbreName: TimbreNameEnum.CELESTE,
        }

        const secondHarmonyEntity: Entity = {
            sections: [ { notes: notes.secondHarmony } ],
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
