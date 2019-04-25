import {
    Configurations,
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/spec'
import { TSRAXCFAUBDJ_INITIAL_BASIS_DURATION, TSRAXCFAUBDJ_INITIAL_BASIS_FREQUENCY } from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASIS_DURATION ]: TSRAXCFAUBDJ_INITIAL_BASIS_DURATION,
    [ StandardSpec.BASIS_FREQUENCY ]: TSRAXCFAUBDJ_INITIAL_BASIS_FREQUENCY,
}

const configurations: Configurations<StandardSpecs> = {
    ...standardConfigurations,
}

const spec: Spec<StandardSpecs> = {
    configurations,
    initialSpecs,
}

export {
    spec,
}
