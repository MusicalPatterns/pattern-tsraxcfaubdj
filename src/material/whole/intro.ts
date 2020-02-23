import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten, Thunk } from '@musical-patterns/utilities'
import { thunkLeadIntroContourPieces, thunkNonLeadIntroRestContourPieces } from '../piece'

const thunkLeadIntroContourWhole: Thunk<ContourWhole<PitchValueScale>> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(thunkLeadIntroContourPieces()))

const thunkNonLeadIntroRestContourWhole: Thunk<ContourWhole<PitchValueScale>> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(thunkNonLeadIntroRestContourPieces()))

export {
    thunkLeadIntroContourWhole,
    thunkNonLeadIntroRestContourWhole,
}
