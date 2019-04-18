import {
    MaterializeScales,
    materializeStandardScales,
    Scale,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import {
    apply,
    computeOctaveRepeatingScalars,
    Hz,
    insteadOf,
    Scalar,
    to,
    Translation,
} from '@musical-patterns/utilities'
import { computeYerExceptionScalars, computeYerScalars } from './scalars'

const materializeScales: MaterializeScales =
    // tslint:disable-next-line no-any
    (specs: StandardSpecs): Array<Scale<any>> => {
        const yerScalars: Array<Scalar<Hz>> = computeOctaveRepeatingScalars(computeYerScalars())

        // tslint:disable-next-line no-any
        const standardScales: Array<Scale<any>> = materializeStandardScales(specs, { pitchScalars: yerScalars })

        const yerExceptionScalars: Array<Scalar<Hz>> = computeOctaveRepeatingScalars(computeYerExceptionScalars())

        const yerExceptionPitchesScale: Scale<Hz> = {
            scalar: insteadOf<Scalar, Hz>(
                apply.Ordinal(
                    standardScales,
                    STANDARD_PITCH_SCALE_INDEX,
                ).scalar ||
                to.Scalar(0),
            ),
            scalars: yerExceptionScalars,
            translation: insteadOf<Translation, Hz>(
                apply.Ordinal(
                    standardScales,
                    STANDARD_PITCH_SCALE_INDEX,
                ).translation ||
                to.Translation(0),
            ),
        }

        return standardScales.concat([
            yerExceptionPitchesScale,
        ])
    }

export {
    materializeScales,
}
