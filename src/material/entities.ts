import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'
import { TsraxcfaubdjParts } from './types'

const buildEntities: () => Entity[] =
    (): Entity[] => {
        const parts: TsraxcfaubdjParts = buildParts()

        const leadEntity: Entity = {
            noteSpecs: parts.lead,
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }

        const bassEntity: Entity = {
            noteSpecs: parts.bass,
            timbreName: TimbreNameEnum.ORGAN_2,
        }

        const firstHarmonyEntity: Entity = {
            noteSpecs: parts.firstHarmony,
            timbreName: TimbreNameEnum.CELESTE,
        }

        const secondHarmonyEntity: Entity = {
            noteSpecs: parts.secondHarmony,
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
    buildEntities,
}
