// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourPiece, FIRST, FOURTH, INITIAL, SECOND, sequence, THIRD, to } from '@musical-patterns/utilities'
import {
    openingPump,
    openingRest,
    quietudePump,
    suspensionPump,
    thirdStepOfOpeningPumpIfItDidNotCommaShift,
} from '../segments'

const buildBassContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence([
            openingRest(),
            openingPump(),
            openingPump()
                .slice(INITIAL, SECOND),
            thirdStepOfOpeningPumpIfItDidNotCommaShift(),
            suspensionPump(),
            suspensionPump({ transposeThirdStepDown: true })
                .slice(INITIAL, THIRD),
            quietudePump(),
            quietudePump()
                .slice(INITIAL, SECOND),
            openingPump()
                .slice(FIRST, FOURTH),
        ])
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    buildBassContourPieces,
}
