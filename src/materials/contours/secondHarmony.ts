// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourPiece, sequence, to } from '@musical-patterns/utilities'
import { YerPitchClass, yerPitchIndex } from '../../custom'
import { YER_SCALE_INDEX } from '../constants'
import { FOURTH_OCTAVE, HALF_NOTE, REST, THREE_WHOLE_NOTES, WHOLE_NOTE } from './constants'

const openingRest: () => number[][][] =
    (): number[][][] => [
        [
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const opening: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const suspension: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), THREE_WHOLE_NOTES, YER_SCALE_INDEX ],
        ],
        [],
        [],
    ]

const desperation: () => number[][][] =
    (): number[][][] => [
        [
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ REST, HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietude: () => number[][][] =
    (): number[][][] => [
        [
            [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntrance: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntranceAsPartOfLoop: () => number[][][] =
    (): number[][][] => [
        [
            [ REST, HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const buildSecondHarmonyContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence([
            openingRest(),
            opening(),
            openingEntranceAsPartOfLoop(),
            opening(),
            suspension(),
            desperation(),
            quietude(),
            quietude(),
            openingEntrance(),
        ])
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    buildSecondHarmonyContourPieces,
}
