import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten } from '@musical-patterns/utilities'
import { computeFirstHarmonyContourPieces } from '../piece'

const computeFirstHarmonyContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(computeFirstHarmonyContourPieces()))

export {
    computeFirstHarmonyContourWhole,
}
