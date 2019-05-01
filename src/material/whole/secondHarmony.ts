import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeSecondHarmonyContourPieces } from '../piece'

const computeSecondHarmonyContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(sequence(...computeSecondHarmonyContourPieces()))

export {
    computeSecondHarmonyContourWhole,
}
