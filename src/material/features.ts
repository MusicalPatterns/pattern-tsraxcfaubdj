import {
    Note,
    PitchDurationScale,
    Scale,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import { ContourElement, from, insteadOf, Scalar, to } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchDurationScale>) => Note =
    ([ pitch, duration, scale ]: ContourElement<PitchDurationScale>): Note => {
        if (pitch === from.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                duration: {
                    scalar: to.Scalar<Scalar>(duration),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gain: {
                    scalar: insteadOf<Scalar, Scalar>(SILENT),
                },
            }
        }

        return {
            duration: {
                scalar: to.Scalar<Scalar>(duration),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitch: {
                index: to.Ordinal<Scalar>(pitch),
                scaleIndex: to.Ordinal<Scale>(scale),
            },
        }
    }

export {
    computeNote,
}
