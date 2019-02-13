import {
    buildYerBlumeyerCommaPump,
    Instruction,
    YerBlumeyerCommaPumpAction,
    YerFactor,
    YerPitchClass,
} from '../../../../src/indexForTest'

describe('comma pumps', () => {
    it('gives you a comma pump from instructions', () => {
        const instructions: Instruction[] = [
            { factor: YerFactor._19, action: YerBlumeyerCommaPumpAction.ADD },
            { factor: YerFactor._17, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._11, action: YerBlumeyerCommaPumpAction.REMOVE },
            { factor: YerFactor._13, action: YerBlumeyerCommaPumpAction.REMOVE },
        ]

        const commaPump: YerPitchClass[][] = buildYerBlumeyerCommaPump(instructions)

        expect(commaPump)
            .toEqual([
                [ YerPitchClass._1 ],
                [ YerPitchClass._19, YerPitchClass._11_13_17 ],
                [ YerPitchClass._11_13 ],
                [ YerPitchClass._13 ],
            ])
    })
})
