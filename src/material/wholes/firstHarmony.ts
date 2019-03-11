import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { computeFirstHarmonyContourPieces } from '../pieces'

const computeFirstHarmonyContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(computeFirstHarmonyContourPieces()))

export {
    computeFirstHarmonyContourWhole,
}
