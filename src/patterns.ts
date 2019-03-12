import { Id, Pattern, Patterns, StandardSpecs } from '@musical-patterns/pattern'
import { material } from './material'
import { metadata } from './metadata'
import { spec } from './spec'

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
