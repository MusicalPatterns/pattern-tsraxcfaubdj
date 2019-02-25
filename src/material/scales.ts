import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import {
    buildStandardScales,
    generateOctaveRepeatingScalars,
    STANDARD_PITCH_SCALE_INDEX,
    StandardSpec,
} from '@musical-patterns/pattern'
import { Scalar } from '@musical-patterns/utilities'
import { buildYerExceptionScalars, buildYerScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const yerScalars: Scalar[] = generateOctaveRepeatingScalars(buildYerScalars())

        const standardScales: Scale[] = buildStandardScales(spec, { pitchScalars: yerScalars })

        const yerExceptionScalars: Scalar[] = generateOctaveRepeatingScalars(buildYerExceptionScalars())
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
    buildScales,
}
