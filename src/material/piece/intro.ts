// tslint:disable max-file-line-count

import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence } from '@musical-patterns/utilities'
import { introLead, introRest } from '../segment'

const computeLeadIntroContourPieces: () => Array<ContourPiece<PitchValueScale>> =
    (): Array<ContourPiece<PitchValueScale>> =>
        sequence(
            introLead(),
        )
            .map((contourPiece: number[][]) => as.ContourPiece<PitchValueScale>(contourPiece))

const computeNonLeadIntroRestContourPieces: () => Array<ContourPiece<PitchValueScale>> =
    (): Array<ContourPiece<PitchValueScale>> =>
        sequence(
            introRest(),
        )
            .map((contourPiece: number[][]) => as.ContourPiece<PitchValueScale>(contourPiece))

export {
    computeLeadIntroContourPieces,
    computeNonLeadIntroRestContourPieces,
}
