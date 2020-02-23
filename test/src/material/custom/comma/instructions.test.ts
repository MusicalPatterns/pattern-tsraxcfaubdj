import { as, Cycle } from '@musical-patterns/utilities'
import {
    computeYerBlumeyerCommaPumpInstructions,
    YerBlumeyerCommaPumpAction,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpInstructionsBlueprint,
    YerBlumeyerCommaPumpOperation,
    YerFactor,
} from '../../../../../src/indexForTest'

describe('comma pump instructions', (): void => {
    it('from a blueprint, gives you instructions for a comma pump, which you could then find a starting position / rotation for to get a final pattern of pitch classes', (): void => {
        const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
            cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(0),
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

    describe('cycling', (): void => {
        it('can cycle', (): void => {
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(3),
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

    describe('family', (): void => {
        it('can change families to B', (): void => {
            const cSpecs: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(0),
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

        it('can change families to C', (): void => {
            const bSpecs: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(0),
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

    describe('operation', (): void => {
        it('can change operation to inverse', (): void => {
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(0),
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

        it('can change operation to converse', (): void => {
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(0),
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

        it('can change operation to reverse', (): void => {
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(0),
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

    describe('combining operations', (): void => {
        it('can do it', (): void => {
            const yerBlumeyerCommaPumpInstructionsBlueprint: YerBlumeyerCommaPumpInstructionsBlueprint = {
                cycling: as.Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>(2),
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
