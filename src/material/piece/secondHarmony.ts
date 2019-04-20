// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence } from '@musical-patterns/utilities'
import {
    desperationSecondHarmony,
    openingEntranceAsPartOfLoopSecondHarmony,
    openingEntranceSecondHarmony,
    openingSecondHarmony,
    quietudeSecondHarmony,
    suspensionSecondHarmony,
} from '../segment'

const computeSecondHarmonyContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
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
            .map((contourPiece: number[][]) => as.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeSecondHarmonyContourPieces,
}
