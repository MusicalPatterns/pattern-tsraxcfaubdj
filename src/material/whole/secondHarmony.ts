import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten } from '@musical-patterns/utilities'
import { computeSecondHarmonyContourPieces } from '../piece'

const computeSecondHarmonyContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(computeSecondHarmonyContourPieces()))

export {
    computeSecondHarmonyContourWhole,
}
