import { PitchDurationScale } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourWhole, forEach, Ordinal, to } from '@musical-patterns/utilities'
import { buildBassContourWhole, REST, YER_PITCH_CLASS_COUNT } from '../../../../src/indexForTest'
import { INDEX_OF_PITCH_WITHIN_CONTOUR_ELEMENT } from './constants'

const getBassPitchClassIndexSet: () => number[] =
    (): number[] =>
        getPitchClassIndices(buildBassContourWhole())
            .filter((value: number, index: number, self: number[]) => self.indexOf(value) === index)
            .filter((value: number) => value !== REST)
            .sort((value: number, nextValue: number) => value - nextValue)

const getPitchClassIndices: (contourWhole: ContourWhole<PitchDurationScale>) => number[] =
    (contourWhole: ContourWhole<PitchDurationScale>): number[] =>
        contourWhole.map((contourElement: ContourElement<PitchDurationScale>) =>
            apply.Modulus(
                apply.Ordinal(contourElement, INDEX_OF_PITCH_WITHIN_CONTOUR_ELEMENT),
                to.Modulus(YER_PITCH_CLASS_COUNT),
            ))

const testDoesNotUseSamePitchesAsBass:
    (contourWhole: ContourWhole<PitchDurationScale>, exceptionalIndices?: Ordinal[]) => void =
    (contourWhole: ContourWhole<PitchDurationScale>, exceptionalIndices: Ordinal[] = []): void => {
        const bassPitchClassIndexSet: number[] = getBassPitchClassIndexSet()

        const pitchClassIndices: number[] = getPitchClassIndices(contourWhole)

        forEach(pitchClassIndices, (pitch: number, index: Ordinal) => {
            if (exceptionalIndices.includes(index)) {
                return
            }
            expect(bassPitchClassIndexSet.includes(pitch))
                .toBeFalsy()
        })
    }

export {
    getBassPitchClassIndexSet,
    testDoesNotUseSamePitchesAsBass,
}
