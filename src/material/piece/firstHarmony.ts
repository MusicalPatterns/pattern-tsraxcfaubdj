// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence } from '@musical-patterns/utilities'
import {
    desperationFirstHarmony,
    openingEntranceAsPartOfLoopFirstHarmony,
    openingEntranceFirstHarmony,
    openingFirstHarmony,
    quietudeFirstHarmony,
    suspensionFirstHarmony,
} from '../segment'

const computeFirstHarmonyContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence(
            openingFirstHarmony(),
            openingEntranceAsPartOfLoopFirstHarmony(),
            openingFirstHarmony(),
            suspensionFirstHarmony(),
            desperationFirstHarmony(),
            quietudeFirstHarmony(),
            quietudeFirstHarmony(),
            openingEntranceFirstHarmony(),
        )
            .map((contourPiece: number[][]) => as.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeFirstHarmonyContourPieces,
}
