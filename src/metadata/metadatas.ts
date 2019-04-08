import { Metadata } from '@musical-patterns/metadata'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Tsraxcfaubdj',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: 'un-pump of the Blumeyer comma (11*13*17)/19',
    originalPublish: '2018-10-31T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}
