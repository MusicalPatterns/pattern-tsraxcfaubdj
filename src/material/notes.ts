import { NoteSpec } from '@musical-patterns/compiler'
import {
    PitchDurationScale,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/pattern'
import { ContourElement, from, Scalar, to } from '@musical-patterns/utilities'

const buildNoteSpec: (contourElement: ContourElement<PitchDurationScale>) => NoteSpec =
    (contourElement: ContourElement<PitchDurationScale>): NoteSpec => {
        const [ pitch, duration, scale ] = contourElement as number[]

        if (pitch === STANDARD_PITCH_INDEX_INDICATING_REST) {
            return {
                durationSpec: {
                    scalar: to.Scalar(duration),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: from.Amplitude(SILENT) as Scalar,
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
