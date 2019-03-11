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
import { buildBassContourWhole } from '../../../../src/indexForTest'
import { pitchClassIndexFromPitchIndexRespectingRests } from '../helpers'
import { INDEX_OF_PITCH_WITHIN_CONTOUR_ELEMENT } from './constants'

const getBassPitchClassIndexSet: () => number[] =
    (): number[] =>
        filter(
            getPitchClassIndices(buildBassContourWhole()),
            uniqueFilter,
        )
            .filter((value: number) => value !== from.Ordinal(STANDARD_PITCH_INDEX_INDICATING_REST))
            .sort(numericSort)

const getPitchClassIndices: (contourWhole: ContourWhole<PitchDurationScale>) => number[] =
    (contourWhole: ContourWhole<PitchDurationScale>): number[] =>
        contourWhole.map((contourElement: ContourElement<PitchDurationScale>) => {
            const pitchIndex: number = apply.Ordinal(contourElement, INDEX_OF_PITCH_WITHIN_CONTOUR_ELEMENT)

            return pitchClassIndexFromPitchIndexRespectingRests(pitchIndex)
        })

const testDoesNotUseSamePitchesAsBass:
    (contourWhole: ContourWhole<PitchDurationScale>, exceptionalIndices?: Ordinal[]) => void =
    (contourWhole: ContourWhole<PitchDurationScale>, exceptionalIndices: Ordinal[] = []): void => {
        const bassPitchClassIndexSet: number[] = getBassPitchClassIndexSet()

        const pitchClassIndices: number[] = getPitchClassIndices(contourWhole)

        forEach(pitchClassIndices, (pitchClassIndex: number, index: Ordinal) => {
            if (exceptionalIndices.includes(index)) {
                return
            }
            expect(bassPitchClassIndexSet.includes(pitchClassIndex))
                .toBeFalsy(`bass pitch class index set ${JSON.stringify(bassPitchClassIndexSet)} included pitch class index ${pitchClassIndex}`)
        })
    }

export {
    getBassPitchClassIndexSet,
    testDoesNotUseSamePitchesAsBass,
}
