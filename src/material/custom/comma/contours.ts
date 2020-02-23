import { insteadOf, isSingleton, map, Ordinal, use } from '@musical-patterns/utilities'
import { YER_SCALE_INDEX } from '../../constants'
import { HALF_NOTE, WHOLE_NOTE } from '../../segment'
import { yerPitchClassIndex } from '../pitchClassIndices'
import { YerPitchClass } from '../types'
import { OctavesMap, YerBlumeyerCommaPump } from './types'

const rawPiecesFromPump: (pump: YerBlumeyerCommaPump, octavesMap: OctavesMap) => number[][][] =
    (pump: YerBlumeyerCommaPump, octavesMap: OctavesMap): number[][][] =>
        map(pump, (pumpStep: YerPitchClass[], index: Ordinal<YerPitchClass[][]>): number[][] =>
            map(pumpStep, (pumpStepElement: YerPitchClass): number[] =>
                [
                    yerPitchClassIndex(use.Ordinal(octavesMap, insteadOf<Ordinal, OctavesMap>(index)), pumpStepElement),
                    isSingleton(pumpStep) ? WHOLE_NOTE : HALF_NOTE,
                    YER_SCALE_INDEX,
                ],
            ),
        )

export {
    rawPiecesFromPump,
}
