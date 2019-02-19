// tslint:disable no-reaching-imports
export { pattern } from './patterns'
export {
    buildYerScalars,
    buildYerExceptionScalars,
    buildScales,
    YER_PITCH_CLASS_COUNT,
    HALF_NOTE,
    WHOLE_NOTE,
    THREE_WHOLE_NOTES,
    buildBassContourPieces,
    buildLeadContourPieces,
    buildFirstHarmonyContourPieces,
    buildSecondHarmonyContourPieces,
    YER_SCALE_INDEX,
    YER_EXCEPTION_SCALE_INDEX,
    SECOND_OCTAVE,
    THIRD_OCTAVE,
    REST,
    DOTTED_HALF_NOTE,
    FIFTH_OCTAVE,
    FOURTH_OCTAVE,
    QUARTER_NOTE,
    buildBassContourWhole,
    buildFirstHarmonyContourWhole,
    buildSecondHarmonyContourWhole,
    buildLeadContourWhole,
} from './materials/indexForTest'
export {
    buildYerBlumeyerCommaPump,
    yerPitchClassIndex,
    YerPitchClass,
    YerBlumeyerCommaPumpInstructionsSpec,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpOperation,
    buildYerBlumeyerCommaPumpInstructions,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpAction,
    YerFactor,
    YerBlumeyerCommaPump,
    YerExceptionPitchClass,
    yerExceptionPitchClassIndex,
    rawPiecesFromPump,
} from './custom/indexForTest'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
