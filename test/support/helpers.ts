import {
    compilePattern,
    PitchValueScale,
    Sound,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    Voice,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    ContourWhole,
    filter,
    forEach,
    Fraction,
    indexOfFinalElement,
    isCloseTo,
    Maybe,
    NEXT,
    numericSort,
    Ordinal,
    quotient,
    Scalar,
    Tone,
    uniqueFilter,
    use,
} from '@musical-patterns/utilities'
import { computeBassContourWhole, pattern, YER_PITCH_CLASS_COUNT } from '../../src/indexForTest'
import { INDEX_OF_PITCH_WITHIN_CONTOUR_ELEMENT } from './constants'

const pitchClassIndexFromPitchIndexRespectingRests: (pitchIndex: number) => number =
    (pitchIndex: number): number => {
        if (pitchIndex === as.number(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return pitchIndex
        }

        return use.Remaindee(
            pitchIndex,
            as.Remaindee(as.number(YER_PITCH_CLASS_COUNT)),
        )
    }

const computeBassPitchClassIndexSet: () => number[] =
    (): number[] =>
        filter(
            computePitchClassIndices(computeBassContourWhole()),
            uniqueFilter,
        )
            .filter((numeral: number) => numeral !== as.number(STANDARD_PITCH_INDEX_INDICATING_REST))
            .sort(numericSort)

const computePitchClassIndices: (contourWhole: ContourWhole<PitchValueScale>) => number[] =
    (contourWhole: ContourWhole<PitchValueScale>): number[] =>
        contourWhole.map((contourElement: ContourElement<PitchValueScale>) => {
            const pitchIndex: number = use.Ordinal(contourElement, INDEX_OF_PITCH_WITHIN_CONTOUR_ELEMENT)

            return pitchClassIndexFromPitchIndexRespectingRests(pitchIndex)
        })

const testDoesNotUseSamePitchesAsBass:
    (contourWhole: ContourWhole<PitchValueScale>, exceptionalIndices?: Ordinal[]) => void =
    (contourWhole: ContourWhole<PitchValueScale>, exceptionalIndices: Ordinal[] = []): void => {
        const bassPitchClassIndexSet: number[] = computeBassPitchClassIndexSet()

        const pitchClassIndices: number[] = computePitchClassIndices(contourWhole)

        forEach(pitchClassIndices, (pitchClassIndex: number, index: Ordinal) => {
            if (exceptionalIndices.includes(index)) {
                return
            }
            expect(bassPitchClassIndexSet.includes(pitchClassIndex))
                .toBeFalsy(`bass pitch class index set ${JSON.stringify(bassPitchClassIndexSet)} included pitch class index ${pitchClassIndex}`)
        })
    }

const testEveryStepIsSimple: (voiceIndex: Ordinal<Voice[]>, exceptionalIndices?: Array<Ordinal<Sound[]>>) => Promise<void> =
    async (voiceIndex: Ordinal<Voice[]>, exceptionalIndices: Array<Ordinal<Sound[]>> = []): Promise<void> => {
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
        const acceptableRatios: Fraction[] = rawAcceptablySimpleRatios.map(
            ([ numerator, denominator ]: [ number, number ]) =>
                as.Fraction([ as.Numerator(numerator), as.Denominator(denominator) ]),
        )

        const { voices } = await compilePattern(pattern)
        const voice: Voice = use.Ordinal(voices, voiceIndex)
        const sounds: Sound[] = voice.sounds || []

        forEach(sounds, (sound: Sound, index: Ordinal<Sound[]>) => {
            if (exceptionalIndices.includes(index)) {
                return
            }

            const nextIndex: Ordinal<Sound[]> = use.Cardinal(index, NEXT)
            if (nextIndex > indexOfFinalElement(sounds)) {
                return
            }
            const nextSound: Maybe<Sound> = use.Ordinal(sounds, nextIndex)
            if (!nextSound) {
                return
            }

            let pass: boolean = false
            const actualStep: Scalar<Tone> = quotient(nextSound.tone, sound.tone)
            acceptableRatios.forEach((acceptableRatio: Fraction) => {
                const acceptableStep: Scalar<Tone> = as.Scalar<Tone>(as.number(acceptableRatio))
                if (isCloseTo(actualStep, acceptableStep)) {
                    pass = true
                }
            })
            if (!pass) {
                fail(`The step between index ${String(index)} and ${String(nextIndex)} is unacceptably complex: ${String(actualStep)}`)
            }
        })
    }

export {
    pitchClassIndexFromPitchIndexRespectingRests,
    testEveryStepIsSimple,
    testDoesNotUseSamePitchesAsBass,
    computeBassPitchClassIndexSet,
    computePitchClassIndices,
}
