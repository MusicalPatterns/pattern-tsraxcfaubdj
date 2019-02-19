// tslint:disable max-file-line-count

import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourPiece, FIRST, INITIAL, sequence, to } from '@musical-patterns/utilities'
import { YerPitchClass, yerPitchIndex } from '../../custom'
import { YER_SCALE_INDEX } from '../constants'
import { DOTTED_HALF_NOTE, FIFTH_OCTAVE, FOURTH_OCTAVE, HALF_NOTE, QUARTER_NOTE, WHOLE_NOTE } from './constants'

const opening: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const suspension: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const desperation: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._11_17_19), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), DOTTED_HALF_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietude: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), WHOLE_NOTE, YER_SCALE_INDEX ],
        ],
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13), HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietudeEndingToLoop: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const quietudeEndingToEscape: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntrance: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const openingEntranceAsPartOfLoop: () => number[][][] =
    (): number[][][] => [
        [
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
            [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
        ],
    ]

const buildLeadContourPieces: () => Array<ContourPiece<PitchDurationScale>> =
    (): Array<ContourPiece<PitchDurationScale>> =>
        sequence([
            opening(),
            openingEntranceAsPartOfLoop(),
            opening(),
            suspension(),
            desperation(),
            quietude(),
            quietudeEndingToLoop(),
            quietude(),
            quietudeEndingToEscape(),
            openingEntrance(),
            opening()
                .slice(INITIAL, FIRST),
        ])
            .map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece))

export {
    buildLeadContourPieces,
}
