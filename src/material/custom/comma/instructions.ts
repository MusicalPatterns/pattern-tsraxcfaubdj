import { apply, Cycle, from } from '@musical-patterns/utilities'
import { computePumpInstructionsFromFamily } from './family'
import { applyPumpInstructionsOperation } from './operations'
import { YerBlumeyerCommaPumpInstruction, YerBlumeyerCommaPumpInstructionsSpec } from './types'

const computeYerBlumeyerCommaPumpInstructions:
    (instructionsSpec: YerBlumeyerCommaPumpInstructionsSpec) => YerBlumeyerCommaPumpInstruction[] =
    (instructionsSpec: YerBlumeyerCommaPumpInstructionsSpec): YerBlumeyerCommaPumpInstruction[] => {
        const { cycling, family, operation } = instructionsSpec
        let instructions: Cycle<YerBlumeyerCommaPumpInstruction> = computePumpInstructionsFromFamily(family)
        instructions = applyPumpInstructionsOperation(instructions, operation)
        instructions = apply.Translation(instructions, cycling)

        return from.Cycle(instructions)
    }

export {
    computeYerBlumeyerCommaPumpInstructions,
}
