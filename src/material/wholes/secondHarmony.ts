import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { computeSecondHarmonyContourPieces } from '../pieces'

const computeSecondHarmonyContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(computeSecondHarmonyContourPieces()))

export {
    computeSecondHarmonyContourWhole,
}
