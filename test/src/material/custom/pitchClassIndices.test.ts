import { computeOrderedPitchClassIndices, YerPitchClass, yerPitchClassIndex } from '../../../../src/indexForTest'

describe('pitch class indices', () => {
    it('has the pitch classes ordered by pitch', () => {
        const actual: YerPitchClass[] = computeOrderedPitchClassIndices()

        expect(actual)
            .toEqual([
                YerPitchClass._1,
                YerPitchClass._13_17_19,
                YerPitchClass._17,
                YerPitchClass._11_13,
                YerPitchClass._11_13_17,
                YerPitchClass._19,
                YerPitchClass._17_19,
                YerPitchClass._11_13_19,
                YerPitchClass._11,
                YerPitchClass._11_13_17_19,
                YerPitchClass._11_17,
                YerPitchClass._13,
                YerPitchClass._11_19,
                YerPitchClass._13_17,
                YerPitchClass._11_17_19,
                YerPitchClass._13_19,
            ])
    })

    it('gives you the index of the pitch in the yer scale, given the octave and pitch class', () => {
        expect(yerPitchClassIndex(0, YerPitchClass._1))
            .toBe(0)
        expect(yerPitchClassIndex(1, YerPitchClass._1))
            .toBe(16)
        expect(yerPitchClassIndex(2, YerPitchClass._1))
            .toBe(32)
        expect(yerPitchClassIndex(3, YerPitchClass._1))
            .toBe(48)

        expect(yerPitchClassIndex(0, YerPitchClass._13_17_19))
            .toBe(1)
        expect(yerPitchClassIndex(1, YerPitchClass._13_17_19))
            .toBe(17)
        expect(yerPitchClassIndex(2, YerPitchClass._13_17_19))
            .toBe(33)
        expect(yerPitchClassIndex(3, YerPitchClass._13_17_19))
            .toBe(49)

        expect(yerPitchClassIndex(0, YerPitchClass._13_19))
            .toBe(15)
        expect(yerPitchClassIndex(1, YerPitchClass._13_19))
            .toBe(31)
        expect(yerPitchClassIndex(2, YerPitchClass._13_19))
            .toBe(47)
        expect(yerPitchClassIndex(3, YerPitchClass._13_19))
            .toBe(63)
    })
})
