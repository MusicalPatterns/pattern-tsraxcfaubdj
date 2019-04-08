// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/material'
import { ContourPiece, sequence, to } from '@musical-patterns/utilities'
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
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeSecondHarmonyContourPieces,
}
