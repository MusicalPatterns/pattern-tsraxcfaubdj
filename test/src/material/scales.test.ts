import { AbstractName, Scale } from '@musical-patterns/material'
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
    Ordinal, Pitch,
    Scalar,
    slice,
    use,
} from '@musical-patterns/utilities'
import { materializeScales, YER_PITCH_CLASS_COUNT } from '../../../src/indexForTest'

describe('yer scale', () => {
    it('the pitch scale has 16 pitch classes, repeating within an octave period', () => {
        const specs: StandardSpecs = {}
        const yerScale: Scale<Pitch> = materializeScales(specs)[ AbstractName.PITCH ]![ 0 ]
        const yerScaleScalars: Array<Scalar<Pitch>> = yerScale.scalars!

        forEach(
            slice(
                yerScaleScalars,
                INITIAL,
                use.Cardinal(
                    indexOfFinalElement(yerScaleScalars),
                    as.Transition<Array<Scalar<Pitch>>>(as.number(negative(YER_PITCH_CLASS_COUNT))),
                ),
            ),
            (scalar: Scalar<Pitch>, index: Ordinal<Array<Scalar<Pitch>>>) => {
                const indexOfScalarWhichShouldBeTwiceThisOne: Ordinal<Array<Scalar<Pitch>>> = use.Cardinal(
                    index,
                    as.Transition<Array<Scalar<Pitch>>>(as.number(YER_PITCH_CLASS_COUNT)),
                )
                const yerScaleScalarWhichShouldBeTwiceThisOne: Maybe<Scalar<Pitch>> =
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
        const yerScale: Scale<Pitch> = materializeScales(specs)[ AbstractName.PITCH ]![ 0 ]
        const yerScaleScalars: Array<Scalar<Pitch>> = yerScale.scalars!

        expect(yerScaleScalars.length)
            .toBe(160)
    })
})
