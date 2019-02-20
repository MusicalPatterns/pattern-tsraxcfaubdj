import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDurationScale, STANDARD_DURATIONS_SCALE_INDEX } from '@musical-patterns/pattern'
import { ContourElement, to, translateFromOneIndexedToZeroIndexed } from '@musical-patterns/utilities'

const buildNoteSpec: (contourElement: ContourElement<PitchDurationScale>) => NoteSpec =
    (contourElement: ContourElement<PitchDurationScale>): NoteSpec => {
        const [ pitch, duration, scale ] = contourElement as number[]

        if (pitch === -1) {
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
                scaleIndex: to.Ordinal(scale),
            },
        }
    }

export {
    buildNoteSpec,
}
