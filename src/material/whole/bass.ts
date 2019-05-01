import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeBassContourPieces } from '../piece'

const computeBassContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(sequence(...computeBassContourPieces()))

export {
    computeBassContourWhole,
}
