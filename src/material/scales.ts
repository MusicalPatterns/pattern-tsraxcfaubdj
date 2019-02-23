import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import {
    buildStandardScales,
    generateOctaveRepeatingScalars,
    StandardSpec,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { from, NO_TRANSLATION, Scalar, to, Translation } from '@musical-patterns/utilities'
import { buildYerExceptionScalars, buildYerScalars } from './scalars'

const buildScales: BuildScalesFunction =
    // tslint:disable-next-line cyclomatic-complexity
    (spec: StandardSpec): Scale[] => {
        const { nonScale, flatDurationsScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationScalar: Scalar =
            from.Ms(spec[ StandardSpecProperties.BASE_DURATION ] || to.Scalar(to.Ms(1)))
        const durationTranslation: Translation =
            from.Ms(spec[ StandardSpecProperties.DURATION_TRANSLATION ] || to.Ms(NO_TRANSLATION))
        const durationsScale: Scale = {
            scalar: durationScalar,
            scalars: flatDurationsScale.scalars,
            translation: durationTranslation,
        }
        const pitchesScalar: Scalar =
            from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Scalar(to.Hz(1)))
        const pitchesTranslation: Translation =
            from.Hz(spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || to.Hz(NO_TRANSLATION))
        const yerScalars: Scalar[] = generateOctaveRepeatingScalars(buildYerScalars())
        const yerPitchesScale: Scale = {
            scalar: pitchesScalar,
            scalars: yerScalars,
            translation: pitchesTranslation,
        }
        const yerExceptionScalars: Scalar[] = generateOctaveRepeatingScalars(buildYerExceptionScalars())
        const yerExceptionPitchesScale: Scale = {
            scalar: pitchesScalar,
            scalars: yerExceptionScalars,
            translation: pitchesTranslation,
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
