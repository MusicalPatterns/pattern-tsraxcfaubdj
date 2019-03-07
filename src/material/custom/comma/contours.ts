import { apply, map, Ordinal } from '@musical-patterns/utilities'
import { YER_SCALE_INDEX } from '../../constants'
import { HALF_NOTE, WHOLE_NOTE } from '../../segments'
import { yerPitchClassIndex } from '../pitchClassIndices'
import { YerPitchClass } from '../types'
import { OctavesMap, YerBlumeyerCommaPump } from './types'

const rawPiecesFromPump: (pump: YerBlumeyerCommaPump, octavesMap: OctavesMap) => number[][][] =
    (pump: YerBlumeyerCommaPump, octavesMap: OctavesMap): number[][][] =>
        map(pump, (pumpStep: YerPitchClass[], index: Ordinal) =>
            map(pumpStep, (pumpStepPart: YerPitchClass) =>
                [
                    yerPitchClassIndex(apply.Ordinal(octavesMap, index) as number, pumpStepPart),
                    pumpStep.length === 1 ? WHOLE_NOTE : HALF_NOTE,
                    YER_SCALE_INDEX,
                ],
            ),
        )

export {
    rawPiecesFromPump,
}
