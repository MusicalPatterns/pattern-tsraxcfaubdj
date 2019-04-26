import { Cycle,  use } from '@musical-patterns/utilities'
import { computePumpInstructionsFromFamily } from './family'
import { applyPumpInstructionsOperation } from './operations'
import { YerBlumeyerCommaPumpInstruction, YerBlumeyerCommaPumpInstructionsBlueprint } from './types'

const computeYerBlumeyerCommaPumpInstructions:
    (instructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint) => YerBlumeyerCommaPumpInstruction[] =
    (instructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint): YerBlumeyerCommaPumpInstruction[] => {
        const { cycling, family, operation } = instructionsBlueprint
        let instructions: Cycle<YerBlumeyerCommaPumpInstruction> = computePumpInstructionsFromFamily(family)
        instructions = applyPumpInstructionsOperation(instructions, operation)
        instructions = use.Cardinal(instructions, cycling)

        delete instructions._CycleBrand

        return instructions
    }

export {
    computeYerBlumeyerCommaPumpInstructions,
}
