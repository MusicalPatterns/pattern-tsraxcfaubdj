import { PitchDurationScale } from '@musical-patterns/pattern'
import { ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { buildSecondHarmonyContourPieces } from '../pieces'

const buildSecondHarmonyContourWhole: () => ContourWhole<PitchDurationScale> =
    (): ContourWhole<PitchDurationScale> =>
        to.ContourWhole<PitchDurationScale>(sequence(buildSecondHarmonyContourPieces()))

export {
    buildSecondHarmonyContourWhole,
}
