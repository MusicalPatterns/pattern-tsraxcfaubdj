import { apply, insteadOf, isSingleton, map, Ordinal } from '@musical-patterns/utilities'
import { YER_SCALE_INDEX } from '../../constants'
import { HALF_NOTE, WHOLE_NOTE } from '../../segment'
import { yerPitchClassIndex } from '../pitchClassIndices'
import { YerPitchClass } from '../types'
import { OctavesMap, YerBlumeyerCommaPump } from './types'

const rawPiecesFromPump: (pump: YerBlumeyerCommaPump, octavesMap: OctavesMap) => number[][][] =
    (pump: YerBlumeyerCommaPump, octavesMap: OctavesMap): number[][][] =>
        map(pump, (pumpStep: YerPitchClass[], index: Ordinal<YerPitchClass[]>) =>
            map(pumpStep, (pumpStepElement: YerPitchClass) =>
                [
                    yerPitchClassIndex(apply.Ordinal(octavesMap, insteadOf<Ordinal>(index)), pumpStepElement),
                    isSingleton(pumpStep) ? WHOLE_NOTE : HALF_NOTE,
                    YER_SCALE_INDEX,
                ],
            ),
        )

export {
    rawPiecesFromPump,
}
