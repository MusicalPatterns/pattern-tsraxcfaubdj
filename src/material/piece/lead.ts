// tslint:disable max-file-line-count

import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence } from '@musical-patterns/utilities'
import {
    desperationLead,
    introLead,
    openingEntranceAsPartOfLoopLead,
    openingEntranceLead,
    openingLead,
    quietudeEndingToEscapeLead,
    quietudeEndingToLoopLead,
    quietudeLead,
    suspensionLead,
} from '../segment'

const computeLeadContourPieces: () => Array<ContourPiece<PitchValueScale>> =
    (): Array<ContourPiece<PitchValueScale>> =>
        sequence(
            openingLead(),
            openingEntranceAsPartOfLoopLead(),
            introLead(),
            openingLead(),
            suspensionLead(),
            desperationLead(),
            quietudeLead(),
            quietudeEndingToLoopLead(),
            quietudeLead(),
            quietudeEndingToEscapeLead(),
            openingEntranceLead(),
            introLead(),
        )
            .map((contourPiece: number[][]) => as.ContourPiece<PitchValueScale>(contourPiece))

export {
    computeLeadContourPieces,
}
