import { NoteSpec } from '@musical-patterns/compiler'
import {
    PitchDurationScale,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/pattern'
import { Amplitude, ContourElement, from, Scalar, to } from '@musical-patterns/utilities'

const buildNoteSpec: (contourElement: ContourElement<PitchDurationScale>) => NoteSpec =
    ([ pitch, duration, scale ]: ContourElement<PitchDurationScale>): NoteSpec => {
        if (pitch === STANDARD_PITCH_INDEX_INDICATING_REST) {
            return {
                durationSpec: {
                    scalar: to.Scalar(duration),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(SILENT),
                },
            }
        }

        return {
            durationSpec: {
                scalar: to.Scalar(duration),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index: to.Ordinal(pitch),
                scaleIndex: to.Ordinal(scale),
            },
        }
    }

export {
    buildNoteSpec,
}
