import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { computeLeadIntroContourPieces, computeNonLeadIntroRestContourPieces } from '../piece'

const computeLeadIntroContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(...computeLeadIntroContourPieces()))

const computeNonLeadIntroRestContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(...computeNonLeadIntroRestContourPieces()))

export {
    computeLeadIntroContourWhole,
    computeNonLeadIntroRestContourWhole,
}
