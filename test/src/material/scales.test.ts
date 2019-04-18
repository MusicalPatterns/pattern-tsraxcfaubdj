import { Scale } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import {
    apply,
    forEach,
    from,
    indexOfFinalElement,
    INITIAL,
    isUndefined,
    Maybe,
    negative,
    ONE_HALF,
    Ordinal,
    Scalar,
    slice,
    to,
} from '@musical-patterns/utilities'
import { materializeScales, YER_PITCH_CLASS_COUNT } from '../../../src/indexForTest'

describe('yer scale', () => {
    it('the pitch scale has 16 pitch classes, repeating within an octave window', () => {
        const specs: StandardSpecs = {}
        const yerScale: Scale = materializeScales(specs)[ 2 ]
        const yerScaleScalars: Scalar[] = yerScale.scalars!

        forEach(
            slice(
                yerScaleScalars,
                INITIAL,
                apply.Translation(
                    indexOfFinalElement(yerScaleScalars),
                    to.Translation<Ordinal<Scalar>>(from.Cardinal(negative(YER_PITCH_CLASS_COUNT))),
                ),
            ),
            (scalar: Scalar, index: Ordinal<Scalar>) => {
                const indexOfScalarWhichShouldBeTwiceThisOne: Ordinal<Scalar> = apply.Translation(
                    index,
                    to.Translation<Ordinal<Scalar>>(from.Cardinal(YER_PITCH_CLASS_COUNT)),
                )
                const yerScaleScalarWhichShouldBeTwiceThisOne: Maybe<Scalar> =
                    apply.Ordinal(yerScaleScalars, indexOfScalarWhichShouldBeTwiceThisOne)
                if (isUndefined(yerScaleScalarWhichShouldBeTwiceThisOne)) {
                    fail('yer scale multiple which should be twice this one was beyond the count of yer scale scalars')

                    return
                }

                expect(scalar)
                    .toEqual(apply.Scalar(
                        yerScaleScalarWhichShouldBeTwiceThisOne,
                        ONE_HALF,
                    ))
            },
        )
    })

    it('has a total of 160 notes, spanning 10 octaves', () => {
        const specs: StandardSpecs = {}
        const yerScale: Scale = materializeScales(specs)[ 2 ]
        const yerScaleScalars: Scalar[] = yerScale.scalars!

        expect(yerScaleScalars.length)
            .toBe(160)
    })
})
