import { NO_TRANSLATION, Ordinal, to } from '@musical-patterns/utilities'
import {
    buildYerBlumeyerCommaPump,
    buildYerBlumeyerCommaPumpInstructions,
    YerBlumeyerCommaPump,
    YerBlumeyerCommaPumpAction,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpOperation,
    YerFactor,
    YerPitchClass,
} from '../../../../../src/indexForTest'

describe('comma pumps', () => {
    let instructions: YerBlumeyerCommaPumpInstruction[]

    describe('rotation', () => {
        beforeEach(() => {
            instructions = [
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
            ]
        })

        it('can rotate the comma pump to the position where the shift by the blumeyer comma occurs at index 0', () => {
            const rotation: Ordinal = to.Ordinal(0)
            const commaPump: YerBlumeyerCommaPump = buildYerBlumeyerCommaPump(instructions, rotation)

            expect(commaPump)
                .toEqual([
                    [ YerPitchClass._19, YerPitchClass._11_13_17 ],
                    [ YerPitchClass._11_13_17_19 ],
                    [ YerPitchClass._11_13_19 ],
                    [ YerPitchClass._13_19 ],
                ])
        })

        it('can rotate the comma pump to the position where the shift by the blumeyer comma occurs at index 1', () => {
            const rotation: Ordinal = to.Ordinal(1)
            const commaPump: YerBlumeyerCommaPump = buildYerBlumeyerCommaPump(instructions, rotation)

            expect(commaPump)
                .toEqual([
                    [ YerPitchClass._1 ],
                    [ YerPitchClass._19, YerPitchClass._11_13_17 ],
                    [ YerPitchClass._11_13 ],
                    [ YerPitchClass._13 ],
                ])
        })

        it('can rotate the comma pump to the position where the shift by the blumeyer comma occurs at index 2', () => {
            const rotation: Ordinal = to.Ordinal(2)
            const commaPump: YerBlumeyerCommaPump = buildYerBlumeyerCommaPump(instructions, rotation)

            expect(commaPump)
                .toEqual([
                    [ YerPitchClass._17 ],
                    [ YerPitchClass._17_19 ],
                    [ YerPitchClass._19, YerPitchClass._11_13_17 ],
                    [ YerPitchClass._13_17 ],
                ])
        })

        it('can rotate the comma pump to the position where the shift by the blumeyer comma occurs at index 3', () => {
            const rotation: Ordinal = to.Ordinal(3)
            const commaPump: YerBlumeyerCommaPump = buildYerBlumeyerCommaPump(instructions, rotation)

            expect(commaPump)
                .toEqual([
                    [ YerPitchClass._11_17 ],
                    [ YerPitchClass._11_17_19 ],
                    [ YerPitchClass._11_19 ],
                    [ YerPitchClass._19, YerPitchClass._11_13_17 ],
                ])
        })
    })

    describe('rotation works for all the rotations of a completely different set of instructions, as a second example', () => {
        beforeEach(() => {
            instructions = [
                { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.ADD },
                { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.REMOVE },
                { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.ADD },
            ]
        })

        it('can rotate the comma pump to the position where the shift by the blumeyer comma occurs at index 0', () => {
            const rotation: Ordinal = to.Ordinal(0)
            const commaPump: YerBlumeyerCommaPump = buildYerBlumeyerCommaPump(instructions, rotation)

            expect(commaPump)
                .toEqual([
                    [ YerPitchClass._11_13_17, YerPitchClass._19 ],
                    [ YerPitchClass._13_19 ],
                    [ YerPitchClass._11_13_19 ],
                    [ YerPitchClass._11_13 ],
                ])
        })

        it('can rotate the comma pump to the position where the shift by the blumeyer comma occurs at index 1', () => {
            const rotation: Ordinal = to.Ordinal(1)
            const commaPump: YerBlumeyerCommaPump = buildYerBlumeyerCommaPump(instructions, rotation)

            expect(commaPump)
                .toEqual([
                    [ YerPitchClass._11_17 ],
                    [ YerPitchClass._11_13_17, YerPitchClass._19 ],
                    [ YerPitchClass._11_19 ],
                    [ YerPitchClass._11 ],
                ])
        })

        it('can rotate the comma pump to the position where the shift by the blumeyer comma occurs at index 2', () => {
            const rotation: Ordinal = to.Ordinal(2)
            const commaPump: YerBlumeyerCommaPump = buildYerBlumeyerCommaPump(instructions, rotation)

            expect(commaPump)
                .toEqual([
                    [ YerPitchClass._17 ],
                    [ YerPitchClass._13_17 ],
                    [ YerPitchClass._11_13_17, YerPitchClass._19 ],
                    [ YerPitchClass._1 ],
                ])
        })

        it('can rotate the comma pump to the position where the shift by the blumeyer comma occurs at index 3', () => {
            const rotation: Ordinal = to.Ordinal(3)
            const commaPump: YerBlumeyerCommaPump = buildYerBlumeyerCommaPump(instructions, rotation)

            expect(commaPump)
                .toEqual([
                    [ YerPitchClass._17_19 ],
                    [ YerPitchClass._13_17_19 ],
                    [ YerPitchClass._11_13_17_19 ],
                    [ YerPitchClass._11_13_17, YerPitchClass._19 ],
                ])
        })
    })
})
