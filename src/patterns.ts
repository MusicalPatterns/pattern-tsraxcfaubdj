import { Id } from '@musical-patterns/id'
import { Pattern, Patterns } from '@musical-patterns/pattern'
import { Specs } from '@musical-patterns/spec'
import { material } from './material'
import { metadata } from './metadata'
import { spec } from './spec'

const pattern: Pattern = {
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
