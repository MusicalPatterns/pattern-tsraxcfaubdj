import { to } from '@musical-patterns/utilities'
import {
    buildYerBlumeyerCommaPumpInstructions,
    YerBlumeyerCommaPumpAction,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpInstructionsSpec,
    YerBlumeyerCommaPumpOperation,
    YerFactor,
} from '../../../../../src/indexForTest'

describe('comma pump instructions', () => {
    it('from a spec, gives you instructions for a comma pump, which you could then find a starting position / rotation for to get a final pattern of pitch classes', () => {
        const yerBlumeyerCommaPumpInstructionsSpec: YerBlumeyerCommaPumpInstructionsSpec = {
            cycling: to.Translation(0),
            family: YerBlumeyerCommaPumpFamily.A,
            operation: YerBlumeyerCommaPumpOperation.BASE,
        }

        const actual: YerBlumeyerCommaPumpInstruction[] = buildYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsSpec)

        const expected: YerBlumeyerCommaPumpInstruction[] = [
            { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
            { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
        ]

        expect(expected)
            .toEqual(actual)
    })

    describe('cycling', () => {
        it('can cycle', () => {
            const yerBlumeyerCommaPumpInstructionsSpec: YerBlumeyerCommaPumpInstructionsSpec = {
                cycling: to.Translation(3),
                family: YerBlumeyerCommaPumpFamily.A,
                operation: YerBlumeyerCommaPumpOperation.BASE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = buildYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsSpec)

            const expected: YerBlumeyerCommaPumpInstruction[] = [
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
            ]

            expect(expected)
                .toEqual(actual)
        })
    })

    describe('family', () => {
        it('can change families to B', () => {
            const cSpec: YerBlumeyerCommaPumpInstructionsSpec = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.B,
                operation: YerBlumeyerCommaPumpOperation.BASE,
            }
            const cActual: YerBlumeyerCommaPumpInstruction[] = buildYerBlumeyerCommaPumpInstructions(cSpec)
            const cExpected: YerBlumeyerCommaPumpInstruction[] = [
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
            ]

            expect(cExpected)
                .toEqual(cActual)
        })

        it('can change families to C', () => {
            const bSpec: YerBlumeyerCommaPumpInstructionsSpec = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.C,
                operation: YerBlumeyerCommaPumpOperation.BASE,
            }
            const bActual: YerBlumeyerCommaPumpInstruction[] = buildYerBlumeyerCommaPumpInstructions(bSpec)
            const bExpected: YerBlumeyerCommaPumpInstruction[] = [
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
            ]

            expect(bExpected)
                .toEqual(bActual)
        })
    })

    describe('operation', () => {
        it('can change operation to inverse', () => {
            const yerBlumeyerCommaPumpInstructionsSpec: YerBlumeyerCommaPumpInstructionsSpec = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.A,
                operation: YerBlumeyerCommaPumpOperation.INVERSE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = buildYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsSpec)

            const expected: YerBlumeyerCommaPumpInstruction[] = [
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.ADD },
            ]

            expect(expected)
                .toEqual(actual)
        })

        it('can change operation to converse', () => {
            const yerBlumeyerCommaPumpInstructionsSpec: YerBlumeyerCommaPumpInstructionsSpec = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.A,
                operation: YerBlumeyerCommaPumpOperation.CONVERSE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = buildYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsSpec)

            const expected: YerBlumeyerCommaPumpInstruction[] = [
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
            ]

            expect(expected)
                .toEqual(actual)
        })

        it('can change operation to reverse', () => {
            const yerBlumeyerCommaPumpInstructionsSpec: YerBlumeyerCommaPumpInstructionsSpec = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.A,
                operation: YerBlumeyerCommaPumpOperation.REVERSE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = buildYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsSpec)

            const expected: YerBlumeyerCommaPumpInstruction[] = [
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.ADD },
            ]

            expect(expected)
                .toEqual(actual)
        })
    })

    describe('combining operations', () => {
        it('can do it', () => {
            const yerBlumeyerCommaPumpInstructionsSpec: YerBlumeyerCommaPumpInstructionsSpec = {
                cycling: to.Translation(2),
                family: YerBlumeyerCommaPumpFamily.C,
                operation: YerBlumeyerCommaPumpOperation.REVERSE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = buildYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsSpec)

            const expected: YerBlumeyerCommaPumpInstruction[] = [
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.ADD },
            ]

            expect(expected)
                .toEqual(actual)
        })
    })
})
