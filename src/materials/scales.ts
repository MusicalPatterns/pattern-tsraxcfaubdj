import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import {
    buildStandardScales,
    generateOctaveRepeatingScalars,
    StandardSpec,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { from, NO_TRANSLATION, Scalar, to } from '@musical-patterns/utilities'
import { buildYerScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const { nonScale, flatDurationsScale } = buildStandardScales()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            scalar: to.Scalar(from.Milliseconds(spec[ StandardSpecProperties.BASE_DURATION ] || to.Milliseconds(1))),
            scalars: flatDurationsScale.scalars,
            translation: spec[ StandardSpecProperties.DURATION_TRANSLATION ] || NO_TRANSLATION,
        }
        const scalars: Scalar[] = generateOctaveRepeatingScalars(buildYerScalars())
        const pitchesScale: Scale = {
            scalar: to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
            scalars,
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || NO_TRANSLATION,
        }

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
