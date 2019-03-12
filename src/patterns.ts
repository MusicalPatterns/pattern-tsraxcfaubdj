import { Material } from '@musical-patterns/compiler'
import { Id, Metadata, Pattern, Patterns, StandardSpecs } from '@musical-patterns/pattern'
import { materializeEntities, materializeScales } from './material'
import { post } from './metadata'
import { spec } from './spec'

const material: Material = {
    materializeEntities,
    materializeScales,
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Tsraxcfaubdj',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: 'un-pump of the Blumeyer comma (11*13*17)/19',
    originalPublish: '2018-10-31T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

const pattern: Pattern<StandardSpecs> = {
    id: Id.TSRAXCFAUBDJ,
    material,
    metadata,
    spec,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
