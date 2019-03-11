import { Frequency, ObjectOf, Scalar } from '@musical-patterns/utilities'

enum YerPitchClass {
    _1 = '_1',
    _11 = '_11',
    _13 = '_13',
    _17 = '_17',
    _19 = '_19',
    _11_13 = '_11_13',
    _11_17 = '_11_17',
    _11_19 = '_11_19',
    _13_17 = '_13_17',
    _13_19 = '_13_19',
    _17_19 = '_17_19',
    _11_13_17 = '_11_13_17',
    _11_13_19 = '_11_13_19',
    _11_17_19 = '_11_17_19',
    _13_17_19 = '_13_17_19',
    _11_13_17_19 = '_11_13_17_19',
}

enum YerExceptionPitchClass {
    _11_11_17 = '_11_11_17',
    _13_19_OVER_11 = '_13_19_OVER_11',
}

enum YerFactor {
    _11 = '_11',
    _13 = '_13',
    _17 = '_17',
    _19 = '_19',
}

type YerFactorization = Partial<{ [Index in YerFactor]: boolean }>

interface Yer {
    pitchClass: YerPitchClass,
    scalar: Scalar<Frequency>,
    subset: Array<Scalar<Frequency>>,
}

type YerPitchClassByFactorization = ObjectOf<ObjectOf<ObjectOf<ObjectOf<YerPitchClass>>>>

type YerPitchClassByFactorizationCursor = ObjectOf<ObjectOf<ObjectOf<ObjectOf<YerPitchClass>>>> |
    ObjectOf<ObjectOf<ObjectOf<YerPitchClass>>> |
    ObjectOf<ObjectOf<YerPitchClass>> |
    ObjectOf<YerPitchClass>

type YerFactorizationByPitchClass = { [Index in YerPitchClass]: YerFactorization }

export {
    Yer,
    YerPitchClass,
    YerExceptionPitchClass,
    YerFactor,
    YerFactorization,
    YerPitchClassByFactorization,
    YerPitchClassByFactorizationCursor,
    YerFactorizationByPitchClass,
}
