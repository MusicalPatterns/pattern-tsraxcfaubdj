// tslint:disable max-file-line-count

import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence, Thunk } from '@musical-patterns/utilities'
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

const thunkLeadContourPieces: Thunk<Array<ContourPiece<PitchValueScale>>> =
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
            .map(
                (contourPiece: number[][]): ContourPiece<PitchValueScale> =>
                    as.ContourPiece<PitchValueScale>(contourPiece),
            )

export {
    thunkLeadContourPieces,
}
