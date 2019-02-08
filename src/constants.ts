// tslint:disable no-magic-numbers

import {
    Hz,
    Ms,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const TSRAXCFAUBDJ_INITIAL_BASE_DURATION: Ms = to.Ms(2400)
const TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY: Hz =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._0 ]

export {
    TSRAXCFAUBDJ_INITIAL_BASE_DURATION,
    TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY,
}
