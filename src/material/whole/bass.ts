import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten } from '@musical-patterns/utilities'
import { computeBassContourPieces } from '../piece'

const computeBassContourWhole: () => ContourWhole<PitchValueScale> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(computeBassContourPieces()))

export {
    computeBassContourWhole,
}
