import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten, Thunk } from '@musical-patterns/utilities'
import { thunkFirstHarmonyContourPieces } from '../piece'

const thunkFirstHarmonyContourWhole: Thunk<ContourWhole<PitchValueScale>> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(thunkFirstHarmonyContourPieces()))

export {
    thunkFirstHarmonyContourWhole,
}
