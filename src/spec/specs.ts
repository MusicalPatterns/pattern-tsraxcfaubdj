import {
    Configurations,
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/spec'
import { TSRAXCFAUBDJ_INITIAL_HZ_PHYSICALIZATION, TSRAXCFAUBDJ_INITIAL_MS_PHYSICALIZATION } from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.MS_PHYSICALIZATION ]: TSRAXCFAUBDJ_INITIAL_MS_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: TSRAXCFAUBDJ_INITIAL_HZ_PHYSICALIZATION,
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
