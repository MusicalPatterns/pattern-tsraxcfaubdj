import { Cycle, reciprocal, to } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../../constants'
import { YerFactor } from '../types'
import { Instruction, YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpFamily } from './types'

const buildPumpInstructionsFromFamily: (family: YerBlumeyerCommaPumpFamily) => Cycle<Instruction> =
    (family: YerBlumeyerCommaPumpFamily): Cycle<Instruction> => {
        switch (family) {
            case YerBlumeyerCommaPumpFamily.A:
                return to.Cycle([
                    { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
                    { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
                    { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
                    { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
                ])
            case YerBlumeyerCommaPumpFamily.B:
                return to.Cycle([
                    { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
                    { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
                    { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
                    { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
                ])
            case YerBlumeyerCommaPumpFamily.C:
                return to.Cycle([
                    { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
                    { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
                    { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
                    { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
                ])
            default:
                throw new Error('YerBlumeyerCommaPumpInstructionsSpec has no family.')
        }
    }

export {
    buildPumpInstructionsFromFamily,
}
