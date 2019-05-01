// tslint:disable no-magic-numbers

import {
    Duration,
    musicalAs,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Tone,
} from '@musical-patterns/utilities'

const TSRAXCFAUBDJ_INITIAL_MS_PHYSICALIZATION: Duration = musicalAs.Duration(2400)
const TSRAXCFAUBDJ_INITIAL_HZ_PHYSICALIZATION: Tone =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._0 ]

export {
    TSRAXCFAUBDJ_INITIAL_MS_PHYSICALIZATION,
    TSRAXCFAUBDJ_INITIAL_HZ_PHYSICALIZATION,
}
