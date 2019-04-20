// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/material'
import { as, ContourPiece, FIRST, FOURTH, INITIAL, SECOND, sequence, slice, THIRD } from '@musical-patterns/utilities'
import {
    openingBassPump,
    quietudeBassPump,
    suspensionBassPump,
    thirdStepOfOpeningBassPumpIfItDidNotCommaShift,
} from '../segment'

const computeBassContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
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
            .map((contourPiece: number[][]) => as.ContourPiece<PitchDurationScale>(contourPiece))

export {
    computeBassContourPieces,
}
