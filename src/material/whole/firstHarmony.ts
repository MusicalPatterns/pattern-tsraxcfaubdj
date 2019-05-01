import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeFirstHarmonyContourPieces } from '../piece'

const computeFirstHarmonyContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(sequence(...computeFirstHarmonyContourPieces()))

export {
    computeFirstHarmonyContourWhole,
}
