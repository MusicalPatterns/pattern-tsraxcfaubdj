import { compilePattern } from '@musical-patterns/compiler'
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
import { pattern } from '../../../../src/indexForTest'

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
})
