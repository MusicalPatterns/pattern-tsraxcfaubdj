import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { computeLeadContourPieces } from '../piece'

const computeLeadContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(...computeLeadContourPieces()))

export {
    computeLeadContourWhole,
}
