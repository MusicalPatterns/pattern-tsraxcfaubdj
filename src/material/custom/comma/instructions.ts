import { apply, Cycle, from } from '@musical-patterns/utilities'
import { computePumpInstructionsFromFamily } from './family'
import { applyPumpInstructionsOperation } from './operations'
import { YerBlumeyerCommaPumpInstruction, YerBlumeyerCommaPumpInstructionsBlueprint } from './types'

const computeYerBlumeyerCommaPumpInstructions:
    (instructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint) => YerBlumeyerCommaPumpInstruction[] =
    (instructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint): YerBlumeyerCommaPumpInstruction[] => {
        const { cycling, family, operation } = instructionsBlueprint
        let instructions: Cycle<YerBlumeyerCommaPumpInstruction> = computePumpInstructionsFromFamily(family)
        instructions = applyPumpInstructionsOperation(instructions, operation)
        instructions = apply.Translation(instructions, cycling)

        return from.Cycle(instructions)
    }

export {
    computeYerBlumeyerCommaPumpInstructions,
}
