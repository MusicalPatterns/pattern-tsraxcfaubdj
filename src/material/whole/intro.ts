import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeLeadIntroContourPieces, computeNonLeadIntroRestContourPieces } from '../piece'

const computeLeadIntroContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        as.ContourWhole<PitchDurationScale>(sequence(...computeLeadIntroContourPieces()))

const computeNonLeadIntroRestContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        as.ContourWhole<PitchDurationScale>(sequence(...computeNonLeadIntroRestContourPieces()))

export {
    computeLeadIntroContourWhole,
    computeNonLeadIntroRestContourWhole,
}
