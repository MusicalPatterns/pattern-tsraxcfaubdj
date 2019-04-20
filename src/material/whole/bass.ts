import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeBassContourPieces } from '../piece'

const computeBassContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        as.ContourWhole<PitchDurationScale>(sequence(...computeBassContourPieces()))

export {
    computeBassContourWhole,
}
