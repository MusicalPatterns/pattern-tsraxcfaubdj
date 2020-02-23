import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten, Thunk } from '@musical-patterns/utilities'
import { thunkSecondHarmonyContourPieces } from '../piece'

const thunkSecondHarmonyContourWhole: Thunk<ContourWhole<PitchValueScale>> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(thunkSecondHarmonyContourPieces()))

export {
    thunkSecondHarmonyContourWhole,
}
