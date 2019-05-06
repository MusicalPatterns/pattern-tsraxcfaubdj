import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten } from '@musical-patterns/utilities'
import { computeLeadIntroContourPieces, computeNonLeadIntroRestContourPieces } from '../piece'

const computeLeadIntroContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(computeLeadIntroContourPieces()))

const computeNonLeadIntroRestContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(computeNonLeadIntroRestContourPieces()))

export {
    computeLeadIntroContourWhole,
    computeNonLeadIntroRestContourWhole,
}
