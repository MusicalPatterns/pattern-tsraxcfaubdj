// tslint:disable max-file-line-count

import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence } from '@musical-patterns/utilities'
import {
    desperationSecondHarmony,
    openingEntranceAsPartOfLoopSecondHarmony,
    openingEntranceSecondHarmony,
    openingSecondHarmony,
    quietudeSecondHarmony,
    suspensionSecondHarmony,
} from '../segment'

const computeSecondHarmonyContourPieces: () => Array<ContourPiece<PitchValueScale>> =
    (): Array<ContourPiece<PitchValueScale>> =>
        sequence(
            openingSecondHarmony(),
            openingEntranceAsPartOfLoopSecondHarmony(),
            openingSecondHarmony(),
            suspensionSecondHarmony(),
            desperationSecondHarmony(),
            quietudeSecondHarmony(),
            quietudeSecondHarmony(),
            openingEntranceSecondHarmony(),
        )
            .map((contourPiece: number[][]) => as.ContourPiece<PitchValueScale>(contourPiece))

export {
    computeSecondHarmonyContourPieces,
}
