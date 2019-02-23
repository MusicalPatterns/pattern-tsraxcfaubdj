import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { buildFirstHarmonyContourPieces } from '../pieces'

const buildFirstHarmonyContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(buildFirstHarmonyContourPieces()))

export {
    buildFirstHarmonyContourWhole,
}
