import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import {
    buildStandardScales,
    generateOctaveRepeatingScalars,
    StandardSpec,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { from, NO_TRANSLATION, Scalar, to } from '@musical-patterns/utilities'
import { buildYerExceptionScalars, buildYerScalars } from './scalars'

const buildScales: BuildScalesFunction =
    // tslint:disable-next-line cyclomatic-complexity
    (spec: StandardSpec): Scale[] => {
        const { nonScale, flatDurationsScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            scalar: to.Scalar(from.Ms(spec[ StandardSpecProperties.BASE_DURATION ] || to.Ms(1))),
            scalars: flatDurationsScale.scalars,
            translation: spec[ StandardSpecProperties.DURATION_TRANSLATION ] || NO_TRANSLATION,
        }
        const yerScalars: Scalar[] = generateOctaveRepeatingScalars(buildYerScalars())
        const yerPitchesScale: Scale = {
            scalar: to.Scalar(from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Hz(1))),
            scalars: yerScalars,
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || NO_TRANSLATION,
        }
        const yerExceptionScalars: Scalar[] = generateOctaveRepeatingScalars(buildYerExceptionScalars())
        const yerExceptionPitchesScale: Scale = {
            scalar: to.Scalar(from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Hz(1))),
            scalars: yerExceptionScalars,
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || NO_TRANSLATION,
        }

        return [
            gainScale,
            durationsScale,
            yerPitchesScale,
            yerExceptionPitchesScale,
        ]
    }

export {
    buildScales,
}
