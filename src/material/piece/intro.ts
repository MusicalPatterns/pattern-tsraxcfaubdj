// tslint:disable max-file-line-count

import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence, Thunk } from '@musical-patterns/utilities'
import { introLead, introRest } from '../segment'

const thunkLeadIntroContourPieces: Thunk<Array<ContourPiece<PitchValueScale>>> =
    (): Array<ContourPiece<PitchValueScale>> =>
        sequence(
            introLead(),
        )
            .map(
                (contourPiece: number[][]): ContourPiece<PitchValueScale> =>
                    as.ContourPiece<PitchValueScale>(contourPiece),
            )

const thunkNonLeadIntroRestContourPieces: Thunk<Array<ContourPiece<PitchValueScale>>> =
    (): Array<ContourPiece<PitchValueScale>> =>
        sequence(
            introRest(),
        )
            .map(
                (contourPiece: number[][]): ContourPiece<PitchValueScale> =>
                    as.ContourPiece<PitchValueScale>(contourPiece),
            )

export {
    thunkLeadIntroContourPieces,
    thunkNonLeadIntroRestContourPieces,
}
