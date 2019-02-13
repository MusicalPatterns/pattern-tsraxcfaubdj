import { Translation } from '@musical-patterns/utilities'
import { YerFactor } from '../types'

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

interface Instruction {
    action: YerBlumeyerCommaPumpAction,
    factor: YerFactor,
}

export {
    YerBlumeyerCommaPumpInstructionsSpec,
    YerBlumeyerCommaPumpFamily,
    YerBlumeyerCommaPumpOperation,
    Instruction,
    YerBlumeyerCommaPumpAction,
}
