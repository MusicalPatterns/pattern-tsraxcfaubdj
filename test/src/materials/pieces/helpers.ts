import { compilePattern } from '@musical-patterns/compiler'
import { Note, ThreadSpec } from '@musical-patterns/performer'
import {
    apply,
    forEach,
    Fraction,
    from, indexOfLastElement,
    isCloseTo,
    Maybe,
    NEXT,
    Ordinal,
    quotient,
    Scalar,
    to,
} from '@musical-patterns/utilities'
import { pattern } from '../../../../src/indexForTest'

const testEveryIntervalIsSimple: (threadSpecIndex: Ordinal, exceptionalIndices?: Ordinal[]) => Promise<void> =
    async (threadSpecIndex: Ordinal, exceptionalIndices: Ordinal[] = []): Promise<void> => {
        const rawAcceptablySimpleRatios: Array<[ number, number ]> = [
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
        const acceptableRatios: Fraction[] = rawAcceptablySimpleRatios.map(to.Fraction)

        const threadSpecs: ThreadSpec[] = await compilePattern({
            material: pattern.material,
            spec: pattern.specData.initial,
        })
        const threadSpec: ThreadSpec = threadSpecs[ threadSpecIndex ]
        const notes: Note[] = threadSpec.notes || []

        forEach(notes, (note: Note, index: Ordinal) => {
            if (exceptionalIndices.includes(index)) {
                return
            }

            const nextIndex: Ordinal = apply.Translation(index, NEXT)
            if (nextIndex > indexOfLastElement(notes)) {
                return
            }
            const nextNote: Maybe<Note> = apply.Ordinal(notes, nextIndex)
            if (!nextNote) {
                return
            }

            let pass: boolean = false
            const actualInterval: Scalar = to.Scalar(from.Hz(quotient(nextNote.frequency, note.frequency)))
            acceptableRatios.forEach((acceptableRatio: Fraction) => {
                const acceptableInterval: Scalar = to.Scalar(from.Fraction(acceptableRatio))
                if (isCloseTo(actualInterval, acceptableInterval)) {
                    pass = true
                }
            })
            if (!pass) {
                fail(`The interval between index ${index} and ${nextIndex} is unacceptably complex: ${actualInterval}`)
            }
        })
    }

export {
    testEveryIntervalIsSimple,
}
