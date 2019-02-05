import { NoteSpec } from '@musical-patterns/compiler'
import {
    PitchDuration,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
    unpackPitchDurationContourElement,
} from '@musical-patterns/pattern'
import { ContourElement, offsetFromOneIndexedToZeroIndexed, to } from '@musical-patterns/utilities'

const buildNoteSpec: (contourElement: ContourElement<PitchDuration>) => NoteSpec =
    (contourElement: ContourElement<PitchDuration>): NoteSpec => {
        const { pitch, duration } = unpackPitchDurationContourElement(contourElement)

        if (pitch === 0) {
            return {
                durationSpec: {
                    index: offsetFromOneIndexedToZeroIndexed(to.Index(duration)),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: to.Scalar(0),
                },
            }
        }

        return {
            durationSpec: {
                index: offsetFromOneIndexedToZeroIndexed(to.Index(duration)),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index: to.Index(pitch),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
