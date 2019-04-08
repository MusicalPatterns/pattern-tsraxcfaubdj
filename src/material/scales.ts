import {
    MaterializeScales,
    materializeStandardScales,
    Scale,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { computeOctaveRepeatingScalars, from, Scalar, to } from '@musical-patterns/utilities'
import { computeYerExceptionScalars, computeYerScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scale[] => {
        const yerScalars: Scalar[] = computeOctaveRepeatingScalars(computeYerScalars())
            .map(from.Frequency)
            .map(to.Scalar)

        const standardScales: Scale[] = materializeStandardScales(specs, { pitchScalars: yerScalars })

        const yerExceptionScalars: Scalar[] = computeOctaveRepeatingScalars(computeYerExceptionScalars())
            .map(from.Frequency)
            .map(to.Scalar)

        const yerExceptionPitchesScale: Scale = {
            scalar: standardScales[ STANDARD_PITCH_SCALE_INDEX ].scalar,
            scalars: yerExceptionScalars,
            translation: standardScales[ STANDARD_PITCH_SCALE_INDEX ].translation,
        }

        return standardScales.concat([
            yerExceptionPitchesScale,
        ])
    }

export {
    materializeScales,
}
