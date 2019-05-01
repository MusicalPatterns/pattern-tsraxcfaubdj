import {
    Note,
    PitchValueScale,
    Scale,
    SILENT,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_VALUE_SCALE_INDEX,
} from '@musical-patterns/material'
import { as, ContourElement, Pitch, Scalar, Value } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchValueScale>) => Note =
    ([ pitch, value, scale ]: ContourElement<PitchValueScale>): Note => {
        if (pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                intensity: {
                    scalar: SILENT,
                },
                value: {
                    scalar: as.Scalar<Value>(value),
                    scaleIndex: STANDARD_VALUE_SCALE_INDEX,
                },
            }
        }

        return {
            pitch: {
                index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
                scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(scale),
            },
            value: {
                scalar: as.Scalar<Value>(value),
                scaleIndex: STANDARD_VALUE_SCALE_INDEX,
            },
        }
    }

export {
    computeNote,
}
