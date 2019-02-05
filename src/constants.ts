// tslint:disable no-magic-numbers

import {
    Frequency,
    Milliseconds,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const TSRAXCFAUBDJ_INITIAL_BASE_DURATION: Milliseconds = to.Milliseconds(2400)
const TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY: Frequency =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._0 ]

export {
    TSRAXCFAUBDJ_INITIAL_BASE_DURATION,
    TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY,
}
