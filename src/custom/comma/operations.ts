import { Cycle, to } from '@musical-patterns/utilities'
import { YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpInstruction, YerBlumeyerCommaPumpOperation } from './types'

const converse: (instructions: Cycle<YerBlumeyerCommaPumpInstruction>) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>): Cycle<YerBlumeyerCommaPumpInstruction> =>
        to.Cycle(
            instructions.slice(0, 1)
                .concat(
                    instructions.slice(1)
                        .reverse(),
                ),
        )

const inverse: (instructions: Cycle<YerBlumeyerCommaPumpInstruction>) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>): Cycle<YerBlumeyerCommaPumpInstruction> =>
        to.Cycle(instructions.map((instruction: YerBlumeyerCommaPumpInstruction) => ({
            ...instruction,
            action: instruction.action === YerBlumeyerCommaPumpAction.ADD ?
                YerBlumeyerCommaPumpAction.REMOVE :
                YerBlumeyerCommaPumpAction.ADD,
        })))

const reverse: (instructions: Cycle<YerBlumeyerCommaPumpInstruction>) => Cycle<YerBlumeyerCommaPumpInstruction> =
    (instructions: Cycle<YerBlumeyerCommaPumpInstruction>): Cycle<YerBlumeyerCommaPumpInstruction> =>
        converse(inverse(instructions))

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
                return converse(instructions)
            case YerBlumeyerCommaPumpOperation.INVERSE:
                return inverse(instructions)
            case YerBlumeyerCommaPumpOperation.REVERSE:
                return reverse(instructions)
            default:
                throw new Error('YerBlumeyerCommaPumpInstructionsSpec has no operation.')
        }
    }

export {
    applyPumpInstructionsOperation,
    inverse,
}
