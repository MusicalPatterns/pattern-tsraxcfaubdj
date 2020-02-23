// tslint:disable max-file-line-count

import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence, Thunk } from '@musical-patterns/utilities'
import {
    desperationSecondHarmony,
    openingEntranceAsPartOfLoopSecondHarmony,
    openingEntranceSecondHarmony,
    openingSecondHarmony,
    quietudeSecondHarmony,
    suspensionSecondHarmony,
} from '../segment'

const thunkSecondHarmonyContourPieces: Thunk<Array<ContourPiece<PitchValueScale>>> =
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
            .map(
                (contourPiece: number[][]): ContourPiece<PitchValueScale> =>
                    as.ContourPiece<PitchValueScale>(contourPiece),
            )

export {
    thunkSecondHarmonyContourPieces,
}
