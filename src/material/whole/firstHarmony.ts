import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeFirstHarmonyContourPieces } from '../piece'

const computeFirstHarmonyContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        as.ContourWhole<PitchDurationScale>(sequence(...computeFirstHarmonyContourPieces()))

export {
    computeFirstHarmonyContourWhole,
}
