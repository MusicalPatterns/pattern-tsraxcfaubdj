import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeSecondHarmonyContourPieces } from '../piece'

const computeSecondHarmonyContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        as.ContourWhole<PitchDurationScale>(sequence(...computeSecondHarmonyContourPieces()))

export {
    computeSecondHarmonyContourWhole,
}
