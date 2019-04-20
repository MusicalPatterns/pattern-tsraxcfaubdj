import { as, Cycle, DECREMENT, INCREMENT, NO_TRANSLATION, sequence, use } from '@musical-patterns/utilities'
import { YerFactor } from '../types'
import { YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpFamily, YerBlumeyerCommaPumpInstruction } from './types'

const computePumpInstructionsFromFamily:
    (family: YerBlumeyerCommaPumpFamily) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (family: YerBlumeyerCommaPumpFamily): Cycle<YerBlumeyerCommaPumpInstruction> => {
        const theFactorsOnTheOtherSide: Cycle<YerBlumeyerCommaPumpInstruction> = as.Cycle([
            { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
        ])

        switch (family) {
            case YerBlumeyerCommaPumpFamily.A:
                return as.Cycle(sequence(
                    [ { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD } ],
                    use.Translation(theFactorsOnTheOtherSide, NO_TRANSLATION),
                ))
            case YerBlumeyerCommaPumpFamily.B:
                return as.Cycle(sequence(
                    [ { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD } ],
                    use.Translation(theFactorsOnTheOtherSide, INCREMENT),
                ))
            case YerBlumeyerCommaPumpFamily.C:
                return as.Cycle(sequence(
                    [ { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD } ],
                    use.Translation(theFactorsOnTheOtherSide, DECREMENT),
                ))
            default:
                throw new Error('YerBlumeyerCommaPumpInstructionsBlueprint has no family.')
        }
    }

export {
    computePumpInstructionsFromFamily,
}
