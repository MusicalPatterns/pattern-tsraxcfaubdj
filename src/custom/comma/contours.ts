import { apply, map, Ordinal } from '@musical-patterns/utilities'
import { HALF_NOTE, WHOLE_NOTE, YER_SCALE_INDEX } from '../../materials'
import { yerPitchIndex } from '../pitchIndices'
import { YerPitchClass } from '../types'
import { OctavesMap, YerBlumeyerCommaPump } from './types'

const rawPiecesFromPump: (pump: YerBlumeyerCommaPump, octavesMap: OctavesMap) => number[][][] =
    (pump: YerBlumeyerCommaPump, octavesMap: OctavesMap): number[][][] =>
        map(pump, (pumpStep: YerPitchClass[], index: Ordinal) =>
            map(pumpStep, (pumpStepPart: YerPitchClass) =>
                [
                    yerPitchIndex(apply.Ordinal(octavesMap, index), pumpStepPart),
                    pumpStep.length === 1 ? WHOLE_NOTE : HALF_NOTE,
                    YER_SCALE_INDEX,
                ],
            ),
        )

export {
    rawPiecesFromPump,
}
