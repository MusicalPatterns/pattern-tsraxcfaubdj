// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/material'
import { ContourPiece, sequence, to } from '@musical-patterns/utilities'
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

const computeLeadContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
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
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeLeadContourPieces,
}
