import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten } from '@musical-patterns/utilities'
import { computeLeadContourPieces } from '../piece'

const computeLeadContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(computeLeadContourPieces()))

export {
    computeLeadContourWhole,
}
