import {
    MaterializeScales,
    materializeStandardScales,
    Scale,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { computeOctaveRepeatingPitchScalars, Pitch, Scalar, use } from '@musical-patterns/utilities'
import { computeYerExceptionScalars, computeYerScalars } from './scalars'

const materializeScales: MaterializeScales =
    // tslint:disable-next-line no-any
    (specs: StandardSpecs): Array<Scale<any>> => {
        const yerScalars: Array<Scalar<Pitch>> = computeOctaveRepeatingPitchScalars(computeYerScalars())

        // tslint:disable-next-line no-any
        const standardScales: Array<Scale<any>> = materializeStandardScales(specs, { pitchScalars: yerScalars })

        const yerExceptionScalars: Array<Scalar<Pitch>> =
            computeOctaveRepeatingPitchScalars(computeYerExceptionScalars())

        const yerExceptionPitchesScale: Scale<Pitch> = {
            basis: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).basis,
            scalars: yerExceptionScalars,
            translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
        }

        return standardScales.concat([
            yerExceptionPitchesScale,
        ])
    }

export {
    materializeScales,
}
