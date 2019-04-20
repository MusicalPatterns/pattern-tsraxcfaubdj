import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeLeadContourPieces } from '../piece'

const computeLeadContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        as.ContourWhole<PitchDurationScale>(sequence(...computeLeadContourPieces()))

export {
    computeLeadContourWhole,
}
