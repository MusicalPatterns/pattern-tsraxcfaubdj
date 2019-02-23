import { apply, Cycle, from } from '@musical-patterns/utilities'
import { buildPumpInstructionsFromFamily } from './family'
import { applyPumpInstructionsOperation } from './operations'
import { YerBlumeyerCommaPumpInstruction, YerBlumeyerCommaPumpInstructionsSpec } from './types'

const buildYerBlumeyerCommaPumpInstructions:
    (instructionsSpec: YerBlumeyerCommaPumpInstructionsSpec) => YerBlumeyerCommaPumpInstruction[] =
    (instructionsSpec: YerBlumeyerCommaPumpInstructionsSpec): YerBlumeyerCommaPumpInstruction[] => {
        const { cycling, family, operation } = instructionsSpec
        let instructions: Cycle<YerBlumeyerCommaPumpInstruction> = buildPumpInstructionsFromFamily(family)
        instructions = applyPumpInstructionsOperation(instructions, operation)
        instructions = apply.Translation(instructions, cycling)

        return from.Cycle(instructions)
    }

export {
    buildYerBlumeyerCommaPumpInstructions,
}
