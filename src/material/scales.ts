// tslint:disable no-non-null-assertion

import { AbstractName, MaterializeScales, materializeStandardScales, Scale, Scales } from '@musical-patterns/material'
import { Specs } from '@musical-patterns/spec'
import { as, computeOctaveRepeatingPitchScalars, musicalAs, Pitch, Scalar, Tone } from '@musical-patterns/utilities'
import { thunkYerExceptionScalars, thunkYerScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: Specs): Scales => {
        const yerScalars: Array<Scalar<Pitch>> = computeOctaveRepeatingPitchScalars(thunkYerScalars())

        const standardScales: Scales = materializeStandardScales(specs, { pitchScalars: yerScalars })

        const yerExceptionScalars: Array<Scalar<Pitch>> =
            computeOctaveRepeatingPitchScalars(thunkYerExceptionScalars())

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
