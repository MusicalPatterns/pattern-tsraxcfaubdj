import { Scale } from '@musical-patterns/compiler'
import { StandardSpec } from '@musical-patterns/pattern'
import { apply, from, INITIAL, ONE_HALF, Scalar } from '@musical-patterns/utilities'
import { buildScales } from '../../../src/indexForTest'

describe('yer scale', () => {
    it('the pitch scale has 16 pitch classes, repeating within an octave window', () => {
        const spec: StandardSpec = {}
        const yerScale: Scale = buildScales(spec)[2]
        const yerScaleScalars: Scalar[] = yerScale.scalars || []

        yerScaleScalars.slice(from.Index(INITIAL), yerScaleScalars.length - 16)
            .forEach((scalar: Scalar, index: number) => {
                expect(scalar)
                    .toEqual(apply.Scalar(yerScaleScalars[ index + 16 ], ONE_HALF))
            })
    })

    it('has a total of 160 notes, spanning 10 octaves', () => {
        const spec: StandardSpec = {}
        const yerScale: Scale = buildScales(spec)[2]
        const yerScaleScalars: Scalar[] = yerScale.scalars || []

        expect(yerScaleScalars.length)
            .toBe(160)
    })
})
