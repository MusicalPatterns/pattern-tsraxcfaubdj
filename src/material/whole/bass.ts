import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten, Thunk } from '@musical-patterns/utilities'
import { thunkBassContourPieces } from '../piece'

const thunkBassContourWhole: Thunk<ContourWhole<PitchValueScale>> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(thunkBassContourPieces()))

export {
    thunkBassContourWhole,
}
