import { PitchDurationScale, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/pattern'
import {
    apply,
    ContourElement,
    ContourWhole,
    filter,
    forEach,
    from,
    numericSort,
    Ordinal,
    uniqueFilter,
} from '@musical-patterns/utilities'
import { computeBassContourWhole } from '../../../../src/indexForTest'
import { pitchClassIndexFromPitchIndexRespectingRests } from '../helpers'
import { INDEX_OF_PITCH_WITHIN_CONTOUR_ELEMENT } from './constants'

const computeBassPitchClassIndexSet: () => number[] =
    (): number[] =>
        filter(
            computePitchClassIndices(computeBassContourWhole()),
            uniqueFilter,
        )
            .filter((value: number) => value !== from.Ordinal(STANDARD_PITCH_INDEX_INDICATING_REST))
            .sort(numericSort)

const computePitchClassIndices: (contourWhole: ContourWhole<PitchDurationScale>) => number[] =
    (contourWhole: ContourWhole<PitchDurationScale>): number[] =>
        contourWhole.map((contourElement: ContourElement<PitchDurationScale>) => {
            const pitchIndex: number = apply.Ordinal(contourElement, INDEX_OF_PITCH_WITHIN_CONTOUR_ELEMENT)

            return pitchClassIndexFromPitchIndexRespectingRests(pitchIndex)
        })

const testDoesNotUseSamePitchesAsBass:
    (contourWhole: ContourWhole<PitchDurationScale>, exceptionalIndices?: Ordinal[]) => void =
    (contourWhole: ContourWhole<PitchDurationScale>, exceptionalIndices: Ordinal[] = []): void => {
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

export {
    computeBassPitchClassIndexSet,
    testDoesNotUseSamePitchesAsBass,
}
