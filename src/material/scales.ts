import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import {
    computeOctaveRepeatingScalars,
    materializeStandardScales,
    STANDARD_PITCH_SCALE_INDEX,
    StandardSpec,
} from '@musical-patterns/pattern'
import { from, Scalar, to } from '@musical-patterns/utilities'
import { computeYerExceptionScalars, computeYerScalars } from './scalars'

const materializeScales: MaterializeScales =
    (spec: StandardSpec): Scale[] => {
        const yerScalars: Scalar[] = computeOctaveRepeatingScalars(computeYerScalars())
            .map(from.Frequency)
            .map(to.Scalar)

        const standardScales: Scale[] = materializeStandardScales(spec, { pitchScalars: yerScalars })

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
