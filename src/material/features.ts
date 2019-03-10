import { Note } from '@musical-patterns/compiler'
import {
    PitchDurationScale,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/pattern'
import { Amplitude, ContourElement, from, Scalar, to } from '@musical-patterns/utilities'

const buildNote: (contourElement: ContourElement<PitchDurationScale>) => Note =
    ([ pitch, duration, scale ]: ContourElement<PitchDurationScale>): Note => {
        if (pitch === STANDARD_PITCH_INDEX_INDICATING_REST) {
            return {
                duration: {
                    scalar: to.Scalar(duration),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gain: {
                    scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(SILENT),
                },
            }
        }

        return {
            duration: {
                scalar: to.Scalar(duration),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitch: {
                index: to.Ordinal(pitch),
                scaleIndex: to.Ordinal(scale),
            },
        }
    }

export {
    buildNote,
}
