import { entries, forEach, Frequency, indexOfLastElement, Ordinal, Scalar } from '@musical-patterns/utilities'
import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../../constants'
import { YER_FACTORS } from './constants'
import {
    Yer,
    YerFactor,
    YerFactorization,
    YerFactorizationByPitchClass,
    YerPitchClass,
    YerPitchClassByFactorization,
    YerPitchClassByFactorizationCursor,
} from './types'
import { buildYer } from './yer'

const pitchClassByFactorization: () => YerPitchClassByFactorization =
    (): YerPitchClassByFactorization =>
        buildYer()
            .reduce<YerPitchClassByFactorization>(
                (accumulator: YerPitchClassByFactorization, yer: Yer): YerPitchClassByFactorization => {
                    let cursor: YerPitchClassByFactorizationCursor = accumulator
                    forEach(YER_FACTORS, (factor: Scalar<Frequency>, index: Ordinal) => {
                        const key: string = yer.subset.includes(factor)
                            .toString()
                        if (!cursor[ key ]) {
                            cursor[ key ] = index === indexOfLastElement(YER_FACTORS) ? yer.pitchClass : {}
                        }
                        cursor = cursor[ key ] as YerPitchClassByFactorizationCursor
                    })

                    return accumulator
                },
                {},
            )

const yerScalarByFactor: { [key in YerFactor]: Scalar<Frequency> } = {
    [ YerFactor._11 ]: YER_ELEVEN,
    [ YerFactor._13 ]: YER_THIRTEEN,
    [ YerFactor._17 ]: YER_SEVENTEEN,
    [ YerFactor._19 ]: YER_NINETEEN,
}

const factorizationByPitchClass: () => YerFactorizationByPitchClass =
    (): YerFactorizationByPitchClass =>
        buildYer()
            .reduce(
                (accumalator: YerFactorizationByPitchClass, yer: Yer): YerFactorizationByPitchClass => {
                    const factorization: YerFactorization = {}
                    entries(yerScalarByFactor)
                        .forEach(([ factor, scalar ]: [ YerFactor, Scalar<Frequency> ]) => {
                            if (yer.subset.includes(scalar)) {
                                factorization[ factor ] = true
                            }
                        })

                    return {
                        ...accumalator,
                        [ yer.pitchClass ]: factorization,
                    }
                },
                // tslint:disable-next-line no-object-literal-type-assertion
                {} as YerFactorizationByPitchClass,
            )

const getYerFactorizationByPitchClass: (yer: YerPitchClass) => YerFactorization =
    (yer: YerPitchClass): YerFactorization =>
        factorizationByPitchClass()[ yer ]

const getYerPitchClassByFactorization: (factors: YerFactorization) => YerPitchClass =
    (yerFactorization: YerFactorization): YerPitchClass => {
        const {
            [ YerFactor._11 ]: eleven = false,
            [ YerFactor._13 ]: thirteen = false,
            [ YerFactor._17 ]: seventeen = false,
            [ YerFactor._19 ]: nineteen = false,
        } = yerFactorization

        return pitchClassByFactorization()
            [ eleven.toString() ]
            [ thirteen.toString() ]
            [ seventeen.toString() ]
            [ nineteen.toString() ]
    }

export {
    getYerPitchClassByFactorization,
    getYerFactorizationByPitchClass,
}
