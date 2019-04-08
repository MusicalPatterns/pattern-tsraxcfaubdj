// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/material'
import { ContourPiece, sequence, to } from '@musical-patterns/utilities'
import { introLead, introRest } from '../segment'

const computeLeadIntroContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence(
            introLead(),
        )
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

const computeNonLeadIntroRestContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence(
            introRest(),
        )
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeLeadIntroContourPieces,
    computeNonLeadIntroRestContourPieces,
}
