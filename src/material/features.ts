import {
    Note,
    PitchDurationScale,
    Scale,
    SILENT,
    STANDARD_DURATION_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import { as, ContourElement, Duration,  Pitch, Scalar } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchDurationScale>) => Note =
    ([ pitch, duration, scale ]: ContourElement<PitchDurationScale>): Note => {
        if (pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                duration: {
                    scalar: as.Scalar<Duration>(duration),
                    scaleIndex: STANDARD_DURATION_SCALE_INDEX,
                },
                gain: {
                    scalar: SILENT,
                },
            }
        }

        return {
            duration: {
                scalar: as.Scalar<Duration>(duration),
                scaleIndex: STANDARD_DURATION_SCALE_INDEX,
            },
            pitch: {
                index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
                scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(scale),
            },
        }
    }

export {
    computeNote,
}
