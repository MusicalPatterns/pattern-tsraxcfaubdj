// tslint:disable max-file-line-count

import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourPiece, sequence, Thunk } from '@musical-patterns/utilities'
import {
    desperationFirstHarmony,
    openingEntranceAsPartOfLoopFirstHarmony,
    openingEntranceFirstHarmony,
    openingFirstHarmony,
    quietudeFirstHarmony,
    suspensionFirstHarmony,
} from '../segment'

const thunkFirstHarmonyContourPieces: Thunk<Array<ContourPiece<PitchValueScale>>> =
    (): Array<ContourPiece<PitchValueScale>> =>
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
            .map(
                (contourPiece: number[][]): ContourPiece<PitchValueScale> =>
                    as.ContourPiece<PitchValueScale>(contourPiece),
            )

export {
    thunkFirstHarmonyContourPieces,
}
