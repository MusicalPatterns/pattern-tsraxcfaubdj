import { Cardinal, Cycle } from '@musical-patterns/utilities'
import { YerFactor, YerPitchClass } from '../types'

enum YerBlumeyerCommaPumpFamily {
    A = 'A',
    B = 'B',
    C = 'C',
}

enum YerBlumeyerCommaPumpOperation {
    BASE = 'BASE',
    INVERSE = 'INVERSE',
    CONVERSE = 'CONVERSE',
    REVERSE = 'REVERSE',
}

interface YerBlumeyerCommaPumpInstructionsBlueprint {
    cycling: Cardinal<Cycle<YerBlumeyerCommaPumpInstruction>>,
    family: YerBlumeyerCommaPumpFamily,
    operation: YerBlumeyerCommaPumpOperation,
}

enum YerBlumeyerCommaPumpAction {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
}

interface YerBlumeyerCommaPumpInstruction {
    action: YerBlumeyerCommaPumpAction,
    factor: YerFactor,
}

type YerBlumeyerCommaPump = [ YerPitchClass[], YerPitchClass[], YerPitchClass[], YerPitchClass[] ]

type OctavesMap = [ number, number, number, number ]

export {
    YerBlumeyerCommaPumpInstructionsBlueprint,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpOperation,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpAction,
    YerBlumeyerCommaPump,
    OctavesMap,
}
