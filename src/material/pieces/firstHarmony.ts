// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourPiece, sequence, to } from '@musical-patterns/utilities'
import {
    desperationFirstHarmony,
    openingEntranceAsPartOfLoopFirstHarmony,
    openingEntranceFirstHarmony,
    openingFirstHarmony,
    openingRest,
    quietudeFirstHarmony,
    suspensionFirstHarmony,
} from '../segments'

const computeFirstHarmonyContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence([
            openingRest(),
            openingFirstHarmony(),
            openingEntranceAsPartOfLoopFirstHarmony(),
            openingFirstHarmony(),
            suspensionFirstHarmony(),
            desperationFirstHarmony(),
            quietudeFirstHarmony(),
            quietudeFirstHarmony(),
            openingEntranceFirstHarmony(),
        ])
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeFirstHarmonyContourPieces,
}
