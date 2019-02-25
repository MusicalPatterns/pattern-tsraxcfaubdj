import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDurationScale, SILENT, STANDARD_DURATIONS_SCALE_INDEX } from '@musical-patterns/pattern'
import { ContourElement, to } from '@musical-patterns/utilities'

const buildNoteSpec: (contourElement: ContourElement<PitchDurationScale>) => NoteSpec =
    (contourElement: ContourElement<PitchDurationScale>): NoteSpec => {
        const [ pitch, duration, scale ] = contourElement as number[]

        if (pitch === -1) {
            return {
                durationSpec: {
                    scalar: to.Scalar(duration),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: SILENT,
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
