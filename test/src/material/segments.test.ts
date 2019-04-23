import { PitchDurationScale, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import {
    as,
    combinationCount,
    ContourElement,
    ContourPiece,
    deepEqual,
    forEach,
    INCREMENT,
    indexOfFinalElement,
    keys,
    NEXT,
    notAs,
    Ordinal,
    Scalar,
    use,
} from '@musical-patterns/utilities'
import {
    computeBassContourPieces,
    computeFirstHarmonyContourPieces,
    computeLeadContourPieces,
    computeOrderedPitchClassIndices,
    computeSecondHarmonyContourPieces,
    computeYerFactorizationByPitchClass,
    YerFactor,
    YerFactorization,
} from '../../../src/indexForTest'
import { pitchClassIndexFromPitchIndexRespectingRests } from '../../support/helpers'
import { PotentialFailure } from '../../support/types'

describe('segments', () => {
    const SEGMENT_COUNT: number = 23
    const QUARTERS_PER_SEGMENT: number = 4
    const QUARTERS_COUNT: number = SEGMENT_COUNT * QUARTERS_PER_SEGMENT
    const COMBINATIONS_PER_QUARTER: number = combinationCount(QUARTERS_PER_SEGMENT, 2)
    const COMBINATIONS_COUNT: number = COMBINATIONS_PER_QUARTER * QUARTERS_COUNT

    const INDEX_OF_PITCH_IN_PITCH_DURATION_SCALE_CONTOUR: Ordinal = as.Ordinal(0)
    const INDEX_OF_DURATION_IN_PITCH_DURATION_SCALE_CONTOUR: Ordinal = as.Ordinal(1)

    const computePitchClassIndicesByQuarter: (contourPieces: Array<ContourPiece<PitchDurationScale>>) => number[] =
        (contourPieces: Array<ContourPiece<PitchDurationScale>>): number[] => {
            const pitchIndicesByQuarter: number[] = []
            contourPieces.forEach((piece: ContourPiece<PitchDurationScale>) => {
                piece.forEach((element: ContourElement<PitchDurationScale>) => {
                    for (
                        let quarter: Ordinal = as.Ordinal(0);
                        notAs.Ordinal(quarter) < (use.Ordinal(element, INDEX_OF_DURATION_IN_PITCH_DURATION_SCALE_CONTOUR));
                        quarter = use.Cardinal(quarter, NEXT)
                    ) {
                        pitchIndicesByQuarter.push(
                            use.Ordinal(element, INDEX_OF_PITCH_IN_PITCH_DURATION_SCALE_CONTOUR),
                        )
                    }
                })
            })

            return pitchIndicesByQuarter.map(pitchClassIndexFromPitchIndexRespectingRests)
        }

    let leadContourPieces: Array<ContourPiece<PitchDurationScale>>
    let bassContourPieces: Array<ContourPiece<PitchDurationScale>>
    let firstHarmonyContourPieces: Array<ContourPiece<PitchDurationScale>>
    let secondHarmonyContourPieces: Array<ContourPiece<PitchDurationScale>>
    beforeEach(() => {
        leadContourPieces = computeLeadContourPieces()
        bassContourPieces = computeBassContourPieces()
        firstHarmonyContourPieces = computeFirstHarmonyContourPieces()
        secondHarmonyContourPieces = computeSecondHarmonyContourPieces()
    })

    it('each array of contour piece has the correct and same amount of segments', () => {
        expect(leadContourPieces.length)
            .toBe(SEGMENT_COUNT)
        expect(bassContourPieces.length)
            .toBe(SEGMENT_COUNT)
        expect(firstHarmonyContourPieces.length)
            .toBe(SEGMENT_COUNT)
        expect(secondHarmonyContourPieces.length)
            .toBe(SEGMENT_COUNT)
    })

    it('each segment makes simple chords', () => {
        const leadPitchClassIndicesByQuarter: number[] = computePitchClassIndicesByQuarter(leadContourPieces)
        const bassPitchClassIndicesByQuarter: number[] = computePitchClassIndicesByQuarter(bassContourPieces)
        const firstHarmonyPitchClassIndicesByQuarter: number[] = computePitchClassIndicesByQuarter(firstHarmonyContourPieces)
        const secondHarmonyPitchClassIndicesByQuarter: number[] = computePitchClassIndicesByQuarter(secondHarmonyContourPieces)

        const quarters: number[][] = []
        for (let index: Ordinal = as.Ordinal(0); notAs.Ordinal(index) < QUARTERS_COUNT; index = use.Cardinal(index, NEXT)) {
            quarters.push([
                use.Ordinal(leadPitchClassIndicesByQuarter, index),
                use.Ordinal(bassPitchClassIndicesByQuarter, index),
                use.Ordinal(firstHarmonyPitchClassIndicesByQuarter, index),
                use.Ordinal(secondHarmonyPitchClassIndicesByQuarter, index),
            ])
        }

        const combinationsOfPitches: Array<[ number, number ]> = []
        quarters.forEach((quarter: number[]) => {
            for (
                let firstPitchIndex: Ordinal = as.Ordinal(0);
                firstPitchIndex < indexOfFinalElement(quarter);
                firstPitchIndex = use.Cardinal(firstPitchIndex, NEXT)
            ) {
                for (
                    let secondPitchIndex: Ordinal = use.Cardinal(firstPitchIndex, INCREMENT);
                    notAs.Ordinal(secondPitchIndex) < quarter.length;
                    secondPitchIndex = use.Cardinal(secondPitchIndex, NEXT)
                ) {
                    combinationsOfPitches.push([
                        use.Ordinal(quarter, firstPitchIndex),
                        use.Ordinal(quarter, secondPitchIndex),
                    ])
                }
            }
        })

        const combinationsOfFactorizations: Array<[ YerFactorization, YerFactorization ]> =
            combinationsOfPitches.map(([ firstPitch, secondPitch ]: [ number, number ]): [ YerFactorization, YerFactorization ] => {
                if (firstPitch === notAs.Ordinal<Scalar[]>(STANDARD_PITCH_INDEX_INDICATING_REST) || secondPitch === notAs.Ordinal<Scalar[]>(STANDARD_PITCH_INDEX_INDICATING_REST)) {
                    return [ {}, {} ]
                }

                return [
                    computeYerFactorizationByPitchClass(computeOrderedPitchClassIndices()[ firstPitch ]),
                    computeYerFactorizationByPitchClass(computeOrderedPitchClassIndices()[ secondPitch ]),
                ]
            })

        expect(combinationsOfFactorizations.length)
            .toBe(COMBINATIONS_COUNT)

        const DESIRED_TENSION_AT_END_OF_DESPERATION_1: number = 45
        const DESIRED_TENSION_AT_END_OF_DESPERATION_2: number = 46
        const DESIRED_TENSION_AT_END_OF_DESPERATION_3: number = 47
        const DESIRED_TENSION_AT_END_OF_DESPERATION_4: number = 49
        const DESIRED_TENSION_AT_END_OF_DESPERATION_5: number = 50
        const DESIRED_TENSION_AT_END_OF_DESPERATION_6: number = 51
        const DESIRED_TENSION_AT_END_OF_FIRST_QUIETUDE_SINCE_IT_IS_NOT_READY_TO_LOOP: number = 65
        const exceptionalIndices: number[] = [
            DESIRED_TENSION_AT_END_OF_DESPERATION_1,
            DESIRED_TENSION_AT_END_OF_DESPERATION_2,
            DESIRED_TENSION_AT_END_OF_DESPERATION_3,
            DESIRED_TENSION_AT_END_OF_DESPERATION_4,
            DESIRED_TENSION_AT_END_OF_DESPERATION_5,
            DESIRED_TENSION_AT_END_OF_DESPERATION_6,
            DESIRED_TENSION_AT_END_OF_FIRST_QUIETUDE_SINCE_IT_IS_NOT_READY_TO_LOOP,
        ]

        const potentialFailures: PotentialFailure[] = []
        forEach(
            combinationsOfFactorizations,
            ([ firstFactorization, secondFactorization ]: [ YerFactorization, YerFactorization ], index: Ordinal<Array<[ YerFactorization, YerFactorization ]>>) => {
                let differences: number = 0
                keys(YerFactor)
                    .forEach((factor: keyof typeof YerFactor) => {
                        if (!!firstFactorization[ factor ] !== !!secondFactorization[ factor ]) {
                            differences += 1
                        }
                    })

                if (differences > 2) {
                    const segment: number = Math.floor(notAs.Ordinal<Array<[ YerFactorization, YerFactorization ]>>(index) / (6 * 4))
                    const quarter: number = Math.floor((notAs.Ordinal<Array<[ YerFactorization, YerFactorization ]>>(index) % (6 * 4)) / 6)

                    const patternQuarter: number = (segment * 4) + quarter
                    if (exceptionalIndices.includes(patternQuarter)) {
                        return
                    }

                    potentialFailures.forEach((potentialFailure: PotentialFailure) => {
                        if (
                            deepEqual(potentialFailure.firstFactorization, firstFactorization) &&
                            deepEqual(potentialFailure.secondFactorization, secondFactorization) &&
                            potentialFailure.patternQuarter === patternQuarter - 1
                        ) {
                            fail(`There was a harmony sustained longer than a single quarter note which was too complex:\
                            ${JSON.stringify(firstFactorization)} ${JSON.stringify(secondFactorization)},\
                            at segment ${segment}, quarter ${quarter}.`)
                        }
                    })
                    potentialFailures.push({ firstFactorization, secondFactorization, patternQuarter })
                }
            },
        )
    })
})
