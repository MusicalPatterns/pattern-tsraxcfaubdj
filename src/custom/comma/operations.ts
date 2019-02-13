import { Cycle, to } from '@musical-patterns/utilities'
import { Instruction, YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpOperation } from './types'

const converse: (instructions: Cycle<Instruction>) => Cycle<Instruction> =
    (instructions: Cycle<Instruction>): Cycle<Instruction> =>
        to.Cycle(instructions.map((instruction: Instruction) => ({
            ...instruction,
            action: instruction.action === YerBlumeyerCommaPumpAction.ADD ?
                YerBlumeyerCommaPumpAction.REMOVE :
                YerBlumeyerCommaPumpAction.ADD,
        })))

const inverse: (instructions: Cycle<Instruction>) => Cycle<Instruction> =
    (instructions: Cycle<Instruction>): Cycle<Instruction> =>
        to.Cycle(
            instructions.slice(0, 1)
                .concat(
                    instructions.slice(1)
                        .reverse(),
                ),
        )

const reverse: (instructions: Cycle<Instruction>) => Cycle<Instruction> =
    (instructions: Cycle<Instruction>): Cycle<Instruction> =>
        converse(inverse(instructions))

const applyPumpInstructionsOperation:
    (instructions: Cycle<Instruction>, operation: YerBlumeyerCommaPumpOperation) => Cycle<Instruction> =
    (instructions: Cycle<Instruction>, operation: YerBlumeyerCommaPumpOperation): Cycle<Instruction> => {
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
}
