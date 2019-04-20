// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence } from '@musical-patterns/utilities'
import { introLead, introRest } from '../segment'

const computeLeadIntroContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence(
            introLead(),
        )
            .map((contourPiece: number[][]) => as.ContourPiece<PitchDurationScale>(contourPiece))

const computeNonLeadIntroRestContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence(
            introRest(),
        )
            .map((contourPiece: number[][]) => as.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeLeadIntroContourPieces,
    computeNonLeadIntroRestContourPieces,
}
