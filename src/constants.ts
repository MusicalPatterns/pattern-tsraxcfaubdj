// tslint:disable no-magic-numbers

import {
    Hz,
    Ms,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const TSRAXCFAUBDJ_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar(to.Ms(2400))
const TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    to.Scalar(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._0 ])

const YER_ELEVEN: Scalar = to.Scalar(11)
const YER_THIRTEEN: Scalar = to.Scalar(13)
const YER_SEVENTEEN: Scalar = to.Scalar(17)
const YER_NINETEEN: Scalar = to.Scalar(19)

export {
    TSRAXCFAUBDJ_INITIAL_BASE_DURATION,
    TSRAXCFAUBDJ_INITIAL_BASE_FREQUENCY,
    YER_ELEVEN,
    YER_THIRTEEN,
    YER_SEVENTEEN,
    YER_NINETEEN,
}
