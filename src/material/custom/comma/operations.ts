import { as, computeReverse, Cycle, FIRST, slice, ZEROTH } from '@musical-patterns/utilities'
import { YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpInstruction, YerBlumeyerCommaPumpOperation } from './types'

const computePumpConverse:
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>): Cycle<YerBlumeyerCommaPumpInstruction> =>
        as.Cycle(
            slice(instructions, ZEROTH, FIRST)
                .concat(computeReverse(slice(instructions, FIRST))),
        )

const computePumpInverse:
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>): Cycle<YerBlumeyerCommaPumpInstruction> =>
        as.Cycle(instructions.map((instruction: YerBlumeyerCommaPumpInstruction) => ({
            ...instruction,
            action: instruction.action === YerBlumeyerCommaPumpAction.ADD ?
                YerBlumeyerCommaPumpAction.REMOVE :
                YerBlumeyerCommaPumpAction.ADD,
        })))

const computePumpReverse:
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>): Cycle<YerBlumeyerCommaPumpInstruction> =>
        computePumpConverse(computePumpInverse(instructions))

const applyPumpInstructionsOperation:
    (
        instructions: Cycle<YerBlumeyerCommaPumpInstruction>,
        operation: YerBlumeyerCommaPumpOperation,
    ) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (
        instructions: Cycle<YerBlumeyerCommaPumpInstruction>,
        operation: YerBlumeyerCommaPumpOperation,
    ): Cycle<YerBlumeyerCommaPumpInstruction> => {
        switch (operation) {
            case YerBlumeyerCommaPumpOperation.BASE:
                return instructions
            case YerBlumeyerCommaPumpOperation.CONVERSE:
                return computePumpConverse(instructions)
            case YerBlumeyerCommaPumpOperation.INVERSE:
                return computePumpInverse(instructions)
            case YerBlumeyerCommaPumpOperation.REVERSE:
                return computePumpReverse(instructions)
            default:
                throw new Error('YerBlumeyerCommaPumpInstructionsBlueprint has no operation.')
        }
    }

export {
    applyPumpInstructionsOperation,
    computePumpInverse,
}
