import { PitchDurationScale } from '@musical-patterns/material'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { computeBassContourPieces } from '../piece'

const computeBassContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(...computeBassContourPieces()))

export {
    computeBassContourWhole,
}
