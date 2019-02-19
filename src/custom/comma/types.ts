import { Translation } from '@musical-patterns/utilities'
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

interface YerBlumeyerCommaPumpInstructionsSpec {
    cycling: Translation,
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
    YerBlumeyerCommaPumpInstructionsSpec,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpOperation,
    YerBlumeyerCommaPumpInstruction,
    YerBlumeyerCommaPumpAction,
    YerBlumeyerCommaPump,
    OctavesMap,
}
