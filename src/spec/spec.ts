import {
    Configurations,
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/pattern'
import { TSRAXCFAUBDJ_INITIAL_BASE_DURATION, TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY } from './constants'

const initial: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASE_DURATION ]: TSRAXCFAUBDJ_INITIAL_BASE_DURATION,
    [ StandardSpec.BASE_FREQUENCY ]: TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY,
}

const configurations: Configurations<StandardSpecs> = {
    ...standardConfigurations,
}

const spec: Spec<StandardSpecs> = {
    configurations,
    initial,
}

export {
    spec,
}
