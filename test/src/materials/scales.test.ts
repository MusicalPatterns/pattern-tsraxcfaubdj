import { Scale } from '@musical-patterns/compiler'
import { StandardSpec } from '@musical-patterns/pattern'
import {
    apply,
    from,
    indexOfLastElement,
    INITIAL,
    negative,
    ONE_HALF,
    Ordinal,
    Scalar,
    slice,
    to,
} from '@musical-patterns/utilities'
import { buildScales, YER_PITCH_CLASS_COUNT } from '../../../src/indexForTest'

describe('yer scale', () => {
    it('the pitch scale has 16 pitch classes, repeating within an octave window', () => {
        const spec: StandardSpec = {}
        const yerScale: Scale = buildScales(spec)[ 2 ]
        const yerScaleScalars: Scalar[] = yerScale.scalars || []

        slice(
            yerScaleScalars,
            INITIAL,
            apply.Translation(
                indexOfLastElement(yerScaleScalars),
                to.Translation(from.Cardinal(negative(YER_PITCH_CLASS_COUNT))),
            ),
        )
            .forEach((scalar: Scalar, index: number) => {
                const indexOfScalarWhichShouldBeTwiceThisOne: Ordinal = to.Ordinal(apply.Translation(
                    index,
                    to.Translation(from.Cardinal(YER_PITCH_CLASS_COUNT)),
                ))
                expect(scalar)
                    .toEqual(apply.Scalar(
                        apply.Ordinal(yerScaleScalars, indexOfScalarWhichShouldBeTwiceThisOne),
                        ONE_HALF,
                    ))
            })
    })

    it('has a total of 160 notes, spanning 10 octaves', () => {
        const spec: StandardSpec = {}
        const yerScale: Scale = buildScales(spec)[ 2 ]
        const yerScaleScalars: Scalar[] = yerScale.scalars || []

        expect(yerScaleScalars.length)
            .toBe(160)
    })
})
