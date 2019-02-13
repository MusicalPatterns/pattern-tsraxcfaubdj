import { YerPitchClass, yerPitchIndex } from '../../../src/indexForTest'

describe('pitch indices', () => {
    it('gives you the index of the pitch in the yer scale, given the octave and pitch class', () => {
        expect(yerPitchIndex(0, YerPitchClass._1))
            .toBe(0)
        expect(yerPitchIndex(1, YerPitchClass._1))
            .toBe(16)
        expect(yerPitchIndex(2, YerPitchClass._1))
            .toBe(32)
        expect(yerPitchIndex(3, YerPitchClass._1))
            .toBe(48)

        expect(yerPitchIndex(0, YerPitchClass._13_17_19))
            .toBe(1)
        expect(yerPitchIndex(1, YerPitchClass._13_17_19))
            .toBe(17)
        expect(yerPitchIndex(2, YerPitchClass._13_17_19))
            .toBe(33)
        expect(yerPitchIndex(3, YerPitchClass._13_17_19))
            .toBe(49)

        expect(yerPitchIndex(0, YerPitchClass._13_19))
            .toBe(15)
        expect(yerPitchIndex(1, YerPitchClass._13_19))
            .toBe(31)
        expect(yerPitchIndex(2, YerPitchClass._13_19))
            .toBe(47)
        expect(yerPitchIndex(3, YerPitchClass._13_19))
            .toBe(63)
    })
})
