import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import {
    generateOctaveRepeatingScalars,
    materializeStandardScales,
    STANDARD_PITCH_SCALE_INDEX,
    StandardSpec,
} from '@musical-patterns/pattern'
import { from, Scalar, to } from '@musical-patterns/utilities'
import { buildYerExceptionScalars, buildYerScalars } from './scalars'

const materializeScales: MaterializeScales =
    (spec: StandardSpec): Scale[] => {
        const yerScalars: Scalar[] = generateOctaveRepeatingScalars(buildYerScalars())
            .map(from.Frequency)
            .map(to.Scalar)

        const standardScales: Scale[] = materializeStandardScales(spec, { pitchScalars: yerScalars })

        const yerExceptionScalars: Scalar[] = generateOctaveRepeatingScalars(buildYerExceptionScalars())
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
