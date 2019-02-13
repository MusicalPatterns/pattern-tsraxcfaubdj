import { to } from '@musical-patterns/utilities'
import {
    buildYerBlumeyerCommaPumpInstructions,
    Instruction,
    YerBlumeyerCommaPumpAction,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpInstructionsSpec,
    YerBlumeyerCommaPumpOperation,
    YerFactor,
} from '../../../../src/indexForTest'

describe('comma pump instructions', () => {
    it('from a spec, gives you instructions for a comma pump, which you could then find a starting position / rotation for to get a final pattern of pitch classes', () => {
        const yerBlumeyerCommaPumpInstructionsSpec: YerBlumeyerCommaPumpInstructionsSpec = {
            cycling: to.Translation(0),
            family: YerBlumeyerCommaPumpFamily.A,
            operation: YerBlumeyerCommaPumpOperation.BASE,
        }

        const actual: Instruction[] = buildYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsSpec)

        const expected: Instruction[] = [
            { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
            { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
        ]

        expect(expected)
            .toEqual(actual)
    })
})
