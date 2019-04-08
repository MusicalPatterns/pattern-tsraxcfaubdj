import { PitchDurationScale } from '@musical-patterns/material'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { computeFirstHarmonyContourPieces } from '../piece'

const computeFirstHarmonyContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(...computeFirstHarmonyContourPieces()))

export {
    computeFirstHarmonyContourWhole,
}
