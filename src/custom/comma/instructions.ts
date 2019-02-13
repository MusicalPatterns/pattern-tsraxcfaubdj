import { apply, Cycle, from } from '@musical-patterns/utilities'
import { buildPumpInstructionsFromFamily } from './family'
import { applyPumpInstructionsOperation } from './operations'
import { Instruction, YerBlumeyerCommaPumpInstructionsSpec } from './types'

const buildYerBlumeyerCommaPumpInstructions:
    (instructionsSpec: YerBlumeyerCommaPumpInstructionsSpec) => Instruction[] =
    (instructionsSpec: YerBlumeyerCommaPumpInstructionsSpec): Instruction[] => {
        const { cycling, family, operation } = instructionsSpec
        let instructions: Cycle<Instruction> = buildPumpInstructionsFromFamily(family)
        instructions = applyPumpInstructionsOperation(instructions, operation)
        instructions = apply.Translation(instructions, cycling)

        return from.Cycle(instructions)
    }

export {
    buildYerBlumeyerCommaPumpInstructions,
}
