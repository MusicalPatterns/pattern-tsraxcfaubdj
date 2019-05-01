// tslint:disable no-non-null-assertion

import { AbstractName, MaterializeScales, materializeStandardScales, Scale, Scales } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { as, computeOctaveRepeatingPitchScalars, musicalAs, Pitch, Scalar, Tone } from '@musical-patterns/utilities'
import { computeYerExceptionScalars, computeYerScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scales => {
        const yerScalars: Array<Scalar<Pitch>> = computeOctaveRepeatingPitchScalars(computeYerScalars())

        const standardScales: Scales = materializeStandardScales(specs, { pitchScalars: yerScalars })

        const yerExceptionScalars: Array<Scalar<Pitch>> =
            computeOctaveRepeatingPitchScalars(computeYerExceptionScalars())

        const yerExceptionPitchesScale: Scale<Pitch> = {
            basis: musicalAs.Tone(as.number(standardScales[ AbstractName.PITCH ]![ 0 ].basis || 0)),
            scalars: yerExceptionScalars,
            translation: as.Translation<Tone>(as.number(standardScales[ AbstractName.PITCH ]![ 0 ].translation || 0)),
        }

        standardScales[ AbstractName.PITCH ]!.push(yerExceptionPitchesScale)

        return standardScales
    }

export {
    materializeScales,
}
