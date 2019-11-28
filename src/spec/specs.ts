import {
    Configurations,
    Spec,
    Specs,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
} from '@musical-patterns/spec'
import { TSRAXCFAUBDJ_INITIAL_HZ_PHYSICALIZATION, TSRAXCFAUBDJ_INITIAL_MS_PHYSICALIZATION } from './constants'

const initialSpecs: Specs = {
    ...standardInitialSpecs,
    [ StandardSpec.MS_PHYSICALIZATION ]: TSRAXCFAUBDJ_INITIAL_MS_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: TSRAXCFAUBDJ_INITIAL_HZ_PHYSICALIZATION,
}

const configurations: Configurations = {
    ...standardConfigurations,
}

const spec: Spec = {
    configurations,
    initialSpecs,
}

export {
    spec,
}
