import {
    SpecAttributesFor,
    SpecDataFor,
    standardInitialSpec,
    StandardSpec,
    standardSpecAttributes,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { TSRAXCFAUBDJ_INITIAL_BASE_DURATION, TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: TSRAXCFAUBDJ_INITIAL_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY,
}

const attributes: SpecAttributesFor<StandardSpec> = {
    ...standardSpecAttributes,
}

const specData: SpecDataFor<StandardSpec> = {
    attributes,
    initial,
}

export {
    specData,
}
