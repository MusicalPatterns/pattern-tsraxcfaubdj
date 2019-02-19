// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/pattern'
import {
    ContourPiece,
    FIRST,
    FOURTH,
    INITIAL,
    NO_TRANSLATION,
    SECOND,
    sequence,
    THIRD,
    to,
} from '@musical-patterns/utilities'
import {
    buildYerBlumeyerCommaPump,
    buildYerBlumeyerCommaPumpInstructions,
    rawPiecesFromPump,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpOperation,
    YerExceptionPitchClass,
    yerExceptionPitchIndex,
    YerPitchClass,
    yerPitchIndex,
} from '../../custom'
import { YER_EXCEPTION_SCALE_INDEX, YER_SCALE_INDEX } from '../constants'
import {
    FIRST_PUMP_ROTATION,
    HALF_NOTE,
    REST,
    SECOND_OCTAVE,
    SECOND_PUMP_ROTATION,
    THIRD_OCTAVE,
    WHOLE_NOTE,
} from './constants'

const openingRest: () => number[][][] =
    (): number[][][] => [
        [
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const firstPump: () => number[][][] =
    (): number[][][] =>
        rawPiecesFromPump(
            buildYerBlumeyerCommaPump(
                buildYerBlumeyerCommaPumpInstructions({
                    cycling: NO_TRANSLATION,
                    family: YerBlumeyerCommaPumpFamily.A,
                    operation: YerBlumeyerCommaPumpOperation.CONVERSE,
                }),
                FIRST_PUMP_ROTATION,
            ),
            [ SECOND_OCTAVE, SECOND_OCTAVE, THIRD_OCTAVE, SECOND_OCTAVE ],
        )

const thirdStepOfFirstPumpIfItDidNotCommaShift: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const secondPump: (parameters?: { transposeThirdStepDown?: boolean }) => number[][][] =
    ({ transposeThirdStepDown = false }: { transposeThirdStepDown?: boolean } = {}): number[][][] =>
        rawPiecesFromPump(
            buildYerBlumeyerCommaPump(
                buildYerBlumeyerCommaPumpInstructions({
                    cycling: to.Translation(1),
                    family: YerBlumeyerCommaPumpFamily.A,
                    operation: YerBlumeyerCommaPumpOperation.INVERSE,
                }),
                SECOND_PUMP_ROTATION,
            ),
            [ THIRD_OCTAVE, THIRD_OCTAVE, transposeThirdStepDown ? SECOND_OCTAVE : THIRD_OCTAVE, THIRD_OCTAVE ],
        )

const thirdPump: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._1), HALF_NOTE, YER_SCALE_INDEX ],
            [
                yerExceptionPitchIndex(SECOND_OCTAVE, YerExceptionPitchClass._11_11_17),
                HALF_NOTE,
                YER_EXCEPTION_SCALE_INDEX,
            ],
        ],
        [
            [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const buildBassContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence([
            openingRest(),
            firstPump(),
            firstPump()
                .slice(INITIAL, SECOND),
            thirdStepOfFirstPumpIfItDidNotCommaShift(),
            secondPump(),
            secondPump({ transposeThirdStepDown: true })
                .slice(INITIAL, THIRD),
            thirdPump(),
            thirdPump()
                .slice(INITIAL, SECOND),
            firstPump()
                .slice(FIRST, FOURTH),
        ])
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    buildBassContourPieces,
}
