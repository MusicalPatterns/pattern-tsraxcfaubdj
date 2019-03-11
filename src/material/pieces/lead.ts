// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourPiece, FIRST, INITIAL, sequence, to } from '@musical-patterns/utilities'
import {
    desperationLead,
    openingEntranceAsPartOfLoopLead,
    openingEntranceLead,
    openingLead,
    quietudeEndingToEscapeLead,
    quietudeEndingToLoopLead,
    quietudeLead,
    suspensionLead,
} from '../segments'

const computeLeadContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence([
            openingLead(),
            openingEntranceAsPartOfLoopLead(),
            openingLead(),
            suspensionLead(),
            desperationLead(),
            quietudeLead(),
            quietudeEndingToLoopLead(),
            quietudeLead(),
            quietudeEndingToEscapeLead(),
            openingEntranceLead(),
            openingLead()
                .slice(INITIAL, FIRST),
        ])
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeLeadContourPieces,
}
