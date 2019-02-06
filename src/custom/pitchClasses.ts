import { apply, from, to } from '@musical-patterns/utilities'
import { YER_PITCH_CLASS_COUNT } from '../materials'
import { Yer } from './types'

const yerPitchClassesOrdered: Yer[] = [
    Yer._1,
    Yer._13_17_19,
    Yer._17,
    Yer._11_13,
    Yer._11_13_17,
    Yer._19,
    Yer._17_19,
    Yer._11_13_19,
    Yer._11,
    Yer._11_13_17_19,
    Yer._11_17,
    Yer._13,
    Yer._11_19,
    Yer._13_17,
    Yer._11_17_19,
    Yer._13_19,
]

const yer: (octaveIndex: number, yerPitchClass: Yer) => number =
    (octaveIndex: number, yerPitchClass: Yer): number =>
        from.Cardinal(apply.Translation(
            apply.Scalar(YER_PITCH_CLASS_COUNT, to.Scalar(octaveIndex)),
            to.Translation(yerPitchClassesOrdered.indexOf(yerPitchClass)),
        ))

export {
    yer,
}
