import { NoteSpec } from '@musical-patterns/compiler'
import {
    PitchDuration,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
    unpackPitchDurationContourElement,
} from '@musical-patterns/pattern'
import { ContourElement, to, translateFromOneIndexedToZeroIndexed } from '@musical-patterns/utilities'

const buildNoteSpec: (contourElement: ContourElement<PitchDuration>) => NoteSpec =
    (contourElement: ContourElement<PitchDuration>): NoteSpec => {
        const { pitch, duration } = unpackPitchDurationContourElement(contourElement)

        if (pitch === 0) {
            return {
                durationSpec: {
                    index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: to.Scalar(0),
                },
            }
        }

        return {
            durationSpec: {
                index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index: to.Ordinal(pitch),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
