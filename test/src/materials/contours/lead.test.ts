import { compilePattern } from '@musical-patterns/compiler'
import { PitchDurationScale } from '@musical-patterns/pattern'
import { Note, ThreadSpec } from '@musical-patterns/performer'
import {
    apply,
    forEach,
    from,
    isCloseTo,
    NEXT,
    Ordinal,
    quotient,
    Ratio,
    Scalar,
    to,
} from '@musical-patterns/utilities'
import {
    buildLeadContourPieces,
    DOTTED_HALF_NOTE,
    FIFTH_OCTAVE,
    FOURTH_OCTAVE,
    HALF_NOTE,
    pattern,
    QUARTER_NOTE,
    WHOLE_NOTE,
    YER_SCALE_INDEX,
    YerPitchClass,
    yerPitchIndex,
} from '../../../../src/indexForTest'

describe('lead part', () => {
    it('almost every interval is a simple 11, 13, 17, or 19', async (done: DoneFn) => {
        const rawAcceptableRatios: Array<[ number, number ]> = [
            [ 1, 1 ],
            [ 11, 16 ],
            [ 11, 8 ],
            [ 16, 11 ],
            [ 8, 11 ],
            [ 13, 16 ],
            [ 13, 8 ],
            [ 16, 13 ],
            [ 8, 13 ],
            [ 16, 17 ],
            [ 32, 17 ],
            [ 17, 16 ],
            [ 17, 32 ],
            [ 16, 19 ],
            [ 32, 19 ],
            [ 19, 16 ],
            [ 19, 32 ],
        ]
        const acceptableRatios: Ratio[] = rawAcceptableRatios.map(to.Ratio)

        const BETWEEN_BAR_3_AND_4: number = 10
        const BETWEEN_BAR_13_AND_14: number = 27
        const BETWEEN_BAR_14_AND_15_IS_ACTUALLY_NOT_NECESSARY_TO_EXCEPT_BECAUSE_IT_GETS_AROUND_THIS_CHECK_WITH_A_COMMA_SHIFT: number = 28
        const BETWEEN_BAR_22_AND_23_WHICH_IS_THE_SAME_AS_BETWEEN_THREE_AND_FOUR: number = 48

        const exceptionalIndices: Ordinal[] = [
            BETWEEN_BAR_3_AND_4,
            BETWEEN_BAR_13_AND_14,
            BETWEEN_BAR_14_AND_15_IS_ACTUALLY_NOT_NECESSARY_TO_EXCEPT_BECAUSE_IT_GETS_AROUND_THIS_CHECK_WITH_A_COMMA_SHIFT,
            BETWEEN_BAR_22_AND_23_WHICH_IS_THE_SAME_AS_BETWEEN_THREE_AND_FOUR,
        ].map(to.Ordinal)

        const threadSpecs: ThreadSpec[] = await compilePattern({
            material: pattern.material,
            spec: pattern.specData.initial,
        })
        const lead: ThreadSpec = threadSpecs[ 0 ]
        const notes: Note[] = lead.notes || []

        forEach(notes, (note: Note, index: Ordinal) => {
            if (exceptionalIndices.includes(index)) {
                return
            }

            const nextIndex: Ordinal = apply.Translation(index, NEXT)
            const nextNote: Note = apply.Ordinal(notes, nextIndex)
            if (!nextNote) {
                return
            }

            let pass: boolean = false
            const actualInterval: Scalar = to.Scalar(from.Hz(quotient(nextNote.frequency, note.frequency)))
            acceptableRatios.forEach((acceptableRatio: Ratio) => {
                const acceptableInterval: Scalar = to.Scalar(from.Ratio(acceptableRatio))
                if (isCloseTo(actualInterval, acceptableInterval)) {
                    pass = true
                }
            })
            if (!pass) {
                fail(`The interval between index ${index} and ${nextIndex} is unacceptably complex: ${actualInterval}`)
            }
        })

        done()
    })

    it('comes out like this', () => {
        expect(buildLeadContourPieces())
            .toEqual(
                [
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

                    [
                        [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],

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
                    [
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
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
                    [
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(FIFTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_17_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(FOURTH_OCTAVE, YerPitchClass._11_13_19), QUARTER_NOTE, YER_SCALE_INDEX ],
                    ],
                ].map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece)),
            )
    })
})
