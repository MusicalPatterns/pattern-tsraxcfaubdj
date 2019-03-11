import { STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/pattern'
import { apply, to } from '@musical-patterns/utilities'
import { YER_PITCH_CLASS_COUNT } from '../../../src/indexForTest'

const pitchClassIndexFromPitchIndexRespectingRests: (pitchIndex: number) => number =
    (pitchIndex: number): number => {
        if (pitchIndex === STANDARD_PITCH_INDEX_INDICATING_REST) {
            return pitchIndex
        }

        return apply.Modulus(
            pitchIndex,
            to.Modulus(YER_PITCH_CLASS_COUNT),
        )
    }

export {
    pitchClassIndexFromPitchIndexRespectingRests,
}
