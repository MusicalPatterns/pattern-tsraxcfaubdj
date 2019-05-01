import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeLeadContourPieces } from '../piece'

const computeLeadContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(sequence(...computeLeadContourPieces()))

export {
    computeLeadContourWhole,
}
