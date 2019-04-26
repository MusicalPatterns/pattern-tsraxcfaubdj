import { Scale } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import {
    as,
    forEach,
    indexOfFinalElement,
    INITIAL,
    isUndefined,
    Maybe,
    negative,

    ONE_HALF,
    Ordinal,
    Scalar,
    slice,
    use,
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
                use.Cardinal(
                    indexOfFinalElement(yerScaleScalars),
                    as.Transition<Scalar[]>(as.number(negative(YER_PITCH_CLASS_COUNT))),
                ),
            ),
            (scalar: Scalar, index: Ordinal<Scalar[]>) => {
                const indexOfScalarWhichShouldBeTwiceThisOne: Ordinal<Scalar[]> = use.Cardinal(
                    index,
                    as.Transition<Scalar[]>(as.number(YER_PITCH_CLASS_COUNT)),
                )
                const yerScaleScalarWhichShouldBeTwiceThisOne: Maybe<Scalar> =
                    use.Ordinal(yerScaleScalars, indexOfScalarWhichShouldBeTwiceThisOne)
                if (isUndefined(yerScaleScalarWhichShouldBeTwiceThisOne)) {
                    fail('yer scale multiple which should be twice this one was beyond the count of yer scale scalars')

                    return
                }

                expect(scalar)
                    .toEqual(use.Scalar(
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
