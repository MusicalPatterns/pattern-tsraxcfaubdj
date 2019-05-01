// tslint:disable max-file-line-count

import { PitchValueScale } from '@musical-patterns/material'
import { as, ContourPiece, FIRST, FOURTH, INITIAL, SECOND, sequence, slice, THIRD } from '@musical-patterns/utilities'
import {
    openingBassPump,
    quietudeBassPump,
    suspensionBassPump,
    thirdStepOfOpeningBassPumpIfItDidNotCommaShift,
} from '../segment'

const computeBassContourPieces: () => Array<ContourPiece<PitchValueScale>> =
    (): Array<ContourPiece<PitchValueScale>> =>
        sequence(
            openingBassPump(),
            slice(openingBassPump(), INITIAL, SECOND),
            thirdStepOfOpeningBassPumpIfItDidNotCommaShift(),
            suspensionBassPump(),
            slice(suspensionBassPump({ transposeThirdStepDown: true }), INITIAL, THIRD),
            quietudeBassPump(),
            slice(quietudeBassPump(), INITIAL, SECOND),
            slice(openingBassPump(), FIRST, FOURTH),
        )
            .map((contourPiece: number[][]) => as.ContourPiece<PitchValueScale>(contourPiece))

export {
    computeBassContourPieces,
}
