import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { computeSecondHarmonyContourPieces } from '../piece'

const computeSecondHarmonyContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(...computeSecondHarmonyContourPieces()))

export {
    computeSecondHarmonyContourWhole,
}
