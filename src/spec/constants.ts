// tslint:disable no-magic-numbers

import {
    Hz,
    Ms,
    ofFrom,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const TSRAXCFAUBDJ_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar<Ms>(2400)
const TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    to.Scalar(ofFrom(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._0 ]))

export {
    TSRAXCFAUBDJ_INITIAL_BASE_DURATION,
    TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY,
}
