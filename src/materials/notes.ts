import { NoteSpec } from '@musical-patterns/compiler'
import {
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
    StandardContour,
    unpackStandardContourElement,
} from '@musical-patterns/pattern'
import { ContourElement, offsetFromOneIndexedToZeroIndexed, to } from '@musical-patterns/utilities'

const buildNoteSpec: (contourElement: ContourElement<StandardContour>) => NoteSpec =
    (contourElement: ContourElement<StandardContour>): NoteSpec => {
        const { pitch, duration } = unpackStandardContourElement(contourElement)

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
                index: offsetFromOneIndexedToZeroIndexed(to.Index(pitch)),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
