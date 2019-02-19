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
    buildBassContourPieces,
    HALF_NOTE,
    pattern,
    REST,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    WHOLE_NOTE,
    YER_EXCEPTION_SCALE_INDEX,
    YER_SCALE_INDEX,
    YerExceptionPitchClass,
    yerExceptionPitchIndex,
    YerPitchClass,
    yerPitchIndex,
} from '../../../../src/indexForTest'

describe('bass', () => {
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

        const FROM_THE_OPENING_REST: number = 0
        const exceptionalIndices: Ordinal[] = [ FROM_THE_OPENING_REST ].map(to.Ordinal)

        const threadSpecs: ThreadSpec[] = await compilePattern({
            material: pattern.material,
            spec: pattern.specData.initial,
        })
        const bass: ThreadSpec = threadSpecs[ 3 ]
        const notes: Note[] = bass.notes || []

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

    it('based on all of those comma shifts, it comes out like this', () => {
        expect(buildBassContourPieces())
            .toEqual(
                [
                    [
                        [ REST, WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._1), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._19), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._1), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
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
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._11_19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13_19), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._19), HALF_NOTE, YER_SCALE_INDEX ],
                        [ yerPitchIndex(THIRD_OCTAVE, YerPitchClass._11_13_17), HALF_NOTE, YER_SCALE_INDEX ],
                    ],
                    [
                        [ yerPitchIndex(SECOND_OCTAVE, YerPitchClass._13_17), WHOLE_NOTE, YER_SCALE_INDEX ],
                    ],
                ].map((contourPiece: number[][]) => to.ContourPiece<PitchDurationScale>(contourPiece)),
            )
    })
})
