import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'

const buildEntities: () => Entity[] =
    (): Entity[] => {
        const {
            leadPart,
            secondHarmonyPart,
            firstHarmonyPart,
            bassPart,
        } = buildParts()

        const leadEntity: Entity = {
            noteSpecs: leadPart,
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }

        const firstHarmonyEntity: Entity = {
            noteSpecs: firstHarmonyPart,
            timbreName: TimbreNameEnum.CELESTE,
        }

        const secondHarmonyEntity: Entity = {
            noteSpecs: secondHarmonyPart,
            timbreName: TimbreNameEnum.ETHNIC_33,
        }

        const bassEntity: Entity = {
            noteSpecs: bassPart,
            timbreName: TimbreNameEnum.ORGAN_2,
        }

        return [
            leadEntity,
            secondHarmonyEntity,
            firstHarmonyEntity,
            bassEntity,
        ]
    }

export {
    buildEntities,
}
