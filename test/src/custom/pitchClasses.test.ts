import { yer, Yer } from '../../../src/indexForTest'

describe('pitch classes', () => {
    it('gives you the index of the pitch in the yer scale, given the octave and pitch class', () => {
        expect(yer(0, Yer._1))
            .toBe(0)
        expect(yer(1, Yer._1))
            .toBe(16)
        expect(yer(2, Yer._1))
            .toBe(32)
        expect(yer(3, Yer._1))
            .toBe(48)

        expect(yer(0, Yer._13_17_19))
            .toBe(1)
        expect(yer(1, Yer._13_17_19))
            .toBe(17)
        expect(yer(2, Yer._13_17_19))
            .toBe(33)
        expect(yer(3, Yer._13_17_19))
            .toBe(49)

        expect(yer(0, Yer._13_19))
            .toBe(15)
        expect(yer(1, Yer._13_19))
            .toBe(31)
        expect(yer(2, Yer._13_19))
            .toBe(47)
        expect(yer(3, Yer._13_19))
            .toBe(63)
    })
})
