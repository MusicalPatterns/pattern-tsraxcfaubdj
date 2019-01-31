import { Material } from '@musical-patterns/compiler'
import { Id, Metadata, PatternFor, Patterns, StandardSpec } from '@musical-patterns/pattern'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { specData } from './specs'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Tsraxcfaubdj',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '2018-10-31T07:00:00.000Z',
}

const pattern: PatternFor<StandardSpec> = {
    id: Id.TSRAXCFAUBDJ,
    material,
    metadata,
    specData,
}

const patterns: Patterns = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
