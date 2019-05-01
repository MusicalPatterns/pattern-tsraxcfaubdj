import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeLeadIntroContourPieces, computeNonLeadIntroRestContourPieces } from '../piece'

const computeLeadIntroContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(sequence(...computeLeadIntroContourPieces()))

const computeNonLeadIntroRestContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(sequence(...computeNonLeadIntroRestContourPieces()))

export {
    computeLeadIntroContourWhole,
    computeNonLeadIntroRestContourWhole,
}
