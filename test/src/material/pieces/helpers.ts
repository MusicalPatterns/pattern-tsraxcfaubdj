import { compilePattern } from '@musical-patterns/compiler'
import { Sound, Voice } from '@musical-patterns/performer'
import {
    apply,
    forEach,
    Fraction,
    from,
    indexOfLastElement,
    isCloseTo,
    Maybe,
    NEXT,
    Ordinal,
    quotient,
    Scalar,
    to,
} from '@musical-patterns/utilities'
import { pattern } from '../../../../src/indexForTest'

const testEveryIntervalIsSimple: (voiceIndex: Ordinal, exceptionalIndices?: Ordinal[]) => Promise<void> =
    async (voiceIndex: Ordinal, exceptionalIndices: Ordinal[] = []): Promise<void> => {
        const rawAcceptablySimpleRatios: Array<[ number, number ]> = [
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
        const acceptableRatios: Fraction[] = rawAcceptablySimpleRatios.map(to.Fraction)

        const voices: Voice[] = await compilePattern(pattern)
        const voice: Voice = voices[ voiceIndex ]
        const sounds: Sound[] = voice.sounds || []

        forEach(sounds, (sound: Sound, index: Ordinal) => {
            if (exceptionalIndices.includes(index)) {
                return
            }

            const nextIndex: Ordinal = apply.Translation(index, NEXT)
            if (nextIndex > indexOfLastElement(sounds)) {
                return
            }
            const nextSound: Maybe<Sound> = apply.Ordinal(sounds, nextIndex)
            if (!nextSound) {
                return
            }

            let pass: boolean = false
            const actualInterval: Scalar = to.Scalar(from.Hz(quotient(nextSound.frequency, sound.frequency)))
            acceptableRatios.forEach((acceptableRatio: Fraction) => {
                const acceptableInterval: Scalar = to.Scalar(from.Fraction(acceptableRatio))
                if (isCloseTo(actualInterval, acceptableInterval)) {
                    pass = true
                }
            })
            if (!pass) {
                fail(`The interval between index ${index} and ${nextIndex} is unacceptably complex: ${actualInterval}`)
            }
        })
    }

export {
    testEveryIntervalIsSimple,
}
