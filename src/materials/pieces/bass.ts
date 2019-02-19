// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourPiece, FIRST, FOURTH, INITIAL, SECOND, sequence, THIRD, to } from '@musical-patterns/utilities'
import {
    openingBassPump,
    openingRest,
    quietudeBassPump,
    suspensionBassPump,
    thirdStepOfOpeningBassPumpIfItDidNotCommaShift,
} from '../segments'

const buildBassContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence([
            openingRest(),
            openingBassPump(),
            openingBassPump()
                .slice(INITIAL, SECOND),
            thirdStepOfOpeningBassPumpIfItDidNotCommaShift(),
            suspensionBassPump(),
            suspensionBassPump({ transposeThirdStepDown: true })
                .slice(INITIAL, THIRD),
            quietudeBassPump(),
            quietudeBassPump()
                .slice(INITIAL, SECOND),
            openingBassPump()
                .slice(FIRST, FOURTH),
        ])
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    buildBassContourPieces,
}
