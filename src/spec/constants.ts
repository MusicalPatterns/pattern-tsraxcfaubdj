// tslint:disable no-magic-numbers

import {
    as,
    Hz,
    Ms,
    ofNotAs,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
} from '@musical-patterns/utilities'

const TSRAXCFAUBDJ_INITIAL_BASE_DURATION: Scalar<Ms> = as.Scalar<Ms>(2400)
const TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    as.Scalar(ofNotAs(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._0 ]))

export {
    TSRAXCFAUBDJ_INITIAL_BASE_DURATION,
    TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY,
}
