import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'

const buildEntities: () => Entity[] =
    (): Entity[] => {
        const {
            mainPart,
            secondSupportPart,
            supportPart,
            bassPart,
        } = buildParts()

        const mainEntity: Entity = {
            noteSpecs: mainPart,
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }

        const supportEntity: Entity = {
            noteSpecs: supportPart,
            timbreName: TimbreNameEnum.CELESTE,
        }

        const secondSupportEntity: Entity = {
            noteSpecs: secondSupportPart,
            timbreName: TimbreNameEnum.ETHNIC_33,
        }

        const bassEntity: Entity = {
            noteSpecs: bassPart,
            timbreName: TimbreNameEnum.ORGAN_2,
        }

        return [
            mainEntity,
            secondSupportEntity,
            supportEntity,
            bassEntity,
        ]
    }

export {
    buildEntities,
}
