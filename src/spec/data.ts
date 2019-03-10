import {
    Attributes,
    Data,
    standardAttributes,
    standardInitialSpec,
    StandardProperty,
    StandardSpec,
} from '@musical-patterns/pattern'
import { TSRAXCFAUBDJ_INITIAL_BASE_DURATION, TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardProperty.BASE_DURATION ]: TSRAXCFAUBDJ_INITIAL_BASE_DURATION,
    [ StandardProperty.BASE_FREQUENCY ]: TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY,
}

const attributes: Attributes<StandardSpec> = {
    ...standardAttributes,
}

const data: Data<StandardSpec> = {
    attributes,
    initial,
}

export {
    data,
}
