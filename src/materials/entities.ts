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
            timbreName: TimbreNameEnum.FLUTE,
        }

        const supportEntity: Entity = {
            noteSpecs: supportPart,
            timbreName: TimbreNameEnum.TROMBONE,
        }

        const secondSupportEntity: Entity = {
            noteSpecs: secondSupportPart,
            timbreName: TimbreNameEnum.TUBA,
        }

        const bassEntity: Entity = {
            noteSpecs: bassPart,
            timbreName: TimbreNameEnum.DOUBLE_BASS,
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
