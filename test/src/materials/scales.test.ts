import { Scale } from '@musical-patterns/compiler'
import { StandardSpec } from '@musical-patterns/pattern'
import {
    apply,
    forEach,
    from,
    indexOfLastElement,
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
        const spec: StandardSpec = {}
        const yerScale: Scale = materializeScales(spec)[ 2 ]
        const yerScaleScalars: Scalar[] = yerScale.scalars || []

        forEach(
            slice(
                yerScaleScalars,
                INITIAL,
                apply.Translation(
                    indexOfLastElement(yerScaleScalars),
                    to.Translation(from.Cardinal(negative(YER_PITCH_CLASS_COUNT))),
                ),
            ),
            (scalar: Scalar, index: Ordinal) => {
                const indexOfScalarWhichShouldBeTwiceThisOne: Ordinal = apply.Translation(
                    index,
                    to.Translation(from.Cardinal(YER_PITCH_CLASS_COUNT)),
                )
                const yerScaleScalarWhichShouldBeTwiceThisOne: Maybe<Scalar> =
                    apply.Ordinal(yerScaleScalars, indexOfScalarWhichShouldBeTwiceThisOne)
                if (isUndefined(yerScaleScalarWhichShouldBeTwiceThisOne)) {
                    fail('yer scale scalar which should be twice this one was beyond the count of yer scale scalars')

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
        const spec: StandardSpec = {}
        const yerScale: Scale = materializeScales(spec)[ 2 ]
        const yerScaleScalars: Scalar[] = yerScale.scalars || []

        expect(yerScaleScalars.length)
            .toBe(160)
    })
})
