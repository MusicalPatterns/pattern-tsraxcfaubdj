import { apply, Cycle, negative, sequence, to } from '@musical-patterns/utilities'
import { YerFactor } from '../types'
import { YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpFamily, YerBlumeyerCommaPumpInstruction } from './types'

const computePumpInstructionsFromFamily:
    (family: YerBlumeyerCommaPumpFamily) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (family: YerBlumeyerCommaPumpFamily): Cycle<YerBlumeyerCommaPumpInstruction> => {
        const theFactorsOnTheOtherSide: Cycle<YerBlumeyerCommaPumpInstruction> = to.Cycle([
            { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
        ])

        switch (family) {
            case YerBlumeyerCommaPumpFamily.A:
                return to.Cycle(sequence([
                    [ { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD } ],
                    apply.Translation(theFactorsOnTheOtherSide, to.Translation(0)),
                ]))
            case YerBlumeyerCommaPumpFamily.B:
                return to.Cycle(sequence([
                    [ { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD } ],
                    apply.Translation(theFactorsOnTheOtherSide, to.Translation(1)),
                ]))
            case YerBlumeyerCommaPumpFamily.C:
                return to.Cycle(sequence([
                    [ { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD } ],
                    apply.Translation(theFactorsOnTheOtherSide, to.Translation(negative(1))),
                ]))
            default:
                throw new Error('YerBlumeyerCommaPumpInstructionsSpec has no family.')
        }
    }

export {
    computePumpInstructionsFromFamily,
}
