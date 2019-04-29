// tslint:disable no-magic-numbers

import {
    Duration,
    musicalAs,
    Pitch,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
} from '@musical-patterns/utilities'

const TSRAXCFAUBDJ_INITIAL_BASIS_DURATION: Duration = musicalAs.Duration(2400)
const TSRAXCFAUBDJ_INITIAL_BASIS_FREQUENCY: Pitch =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._0 ]

export {
    TSRAXCFAUBDJ_INITIAL_BASIS_DURATION,
    TSRAXCFAUBDJ_INITIAL_BASIS_FREQUENCY,
}
