import {
    Note,
    PitchDurationScale,
    Scale,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import { Amplitude, as, ContourElement, notAs, Scalar } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchDurationScale>) => Note =
    ([ pitch, duration, scale ]: ContourElement<PitchDurationScale>): Note => {
        if (pitch === notAs.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                duration: {
                    scalar: as.Scalar<Scalar>(duration),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gain: {
                    scalar: as.Scalar<Scalar>(notAs.NormalScalar<Amplitude>(SILENT)),
                },
            }
        }

        return {
            duration: {
                scalar: as.Scalar<Scalar>(duration),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitch: {
                index: as.Ordinal<Scalar>(pitch),
                scaleIndex: as.Ordinal<Scale>(scale),
            },
        }
    }

export {
    computeNote,
}
