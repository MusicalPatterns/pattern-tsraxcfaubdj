import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourWhole, flatten, Thunk } from '@musical-patterns/utilities'
import { thunkLeadContourPieces } from '../piece'

const thunkLeadContourWhole: Thunk<ContourWhole<PitchValueScale>> =
    (): ContourWhole<PitchValueScale> =>
        as.ContourWhole<PitchValueScale>(flatten(thunkLeadContourPieces()))

export {
    thunkLeadContourWhole,
}
