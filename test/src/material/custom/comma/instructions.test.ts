import { to } from '@musical-patterns/utilities'
import {
    computeYerBlumeyerCommaPumpInstructions,
    YerBlumeyerCommaPumpAction,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpInstructionsBlueprint,
    YerBlumeyerCommaPumpOperation,
    YerFactor,
} from '../../../../../src/indexForTest'

describe('comma pump instructions', () => {
    it('from a blueprint, gives you instructions for a comma pump, which you could then find a starting position / rotation for to get a final pattern of pitch classes', () => {
        const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
            cycling: to.Translation(0),
            family: YerBlumeyerCommaPumpFamily.A,
            operation: YerBlumeyerCommaPumpOperation.BASE,
        }

        const actual: YerBlumeyerCommaPumpInstruction[] = computeYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsBlueprint)

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
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: to.Translation(3),
                family: YerBlumeyerCommaPumpFamily.A,
                operation: YerBlumeyerCommaPumpOperation.BASE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = computeYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsBlueprint)

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
            const cSpecs: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.B,
                operation: YerBlumeyerCommaPumpOperation.BASE,
            }
            const cActual: YerBlumeyerCommaPumpInstruction[] = computeYerBlumeyerCommaPumpInstructions(cSpecs)
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
            const bSpecs: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.C,
                operation: YerBlumeyerCommaPumpOperation.BASE,
            }
            const bActual: YerBlumeyerCommaPumpInstruction[] = computeYerBlumeyerCommaPumpInstructions(bSpecs)
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
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.A,
                operation: YerBlumeyerCommaPumpOperation.INVERSE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = computeYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsBlueprint)

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
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.A,
                operation: YerBlumeyerCommaPumpOperation.CONVERSE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = computeYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsBlueprint)

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
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: to.Translation(0),
                family: YerBlumeyerCommaPumpFamily.A,
                operation: YerBlumeyerCommaPumpOperation.REVERSE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = computeYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsBlueprint)

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
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: to.Translation(2),
                family: YerBlumeyerCommaPumpFamily.C,
                operation: YerBlumeyerCommaPumpOperation.REVERSE,
            }

            const actual: YerBlumeyerCommaPumpInstruction[] = computeYerBlumeyerCommaPumpInstructions(yerBlumeyerCommaPumpInstructionsBlueprint)

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
