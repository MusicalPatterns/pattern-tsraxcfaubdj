import { YER_ELEVEN, YER_NINETEEN, YER_SEVENTEEN, YER_THIRTEEN } from '../../constants'
import { YerFactor, YerMultiple, YerPitchClass, YerPitchClassByFactorizationCursor } from '../types'

const yerMultipleByFactor: { [Index in YerFactor]: YerMultiple } = {
    [ YerFactor._11 ]: YER_ELEVEN,
    [ YerFactor._13 ]: YER_THIRTEEN,
    [ YerFactor._17 ]: YER_SEVENTEEN,
    [ YerFactor._19 ]: YER_NINETEEN,
}

const isNotYerPitchClassByFactorizationLeaf:
    (node: YerPitchClassByFactorizationCursor | YerPitchClass) => node is YerPitchClassByFactorizationCursor =
    (node: YerPitchClassByFactorizationCursor | YerPitchClass): node is YerPitchClassByFactorizationCursor =>
        typeof node !== 'string'

export {
    isNotYerPitchClassByFactorizationLeaf,
    yerMultipleByFactor,
}
