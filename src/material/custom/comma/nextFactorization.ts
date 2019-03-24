import { objectSet } from '@musical-patterns/utilities'
import { YerFactorization } from '../types'
import { YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpInstruction } from './types'

const nextFactorization:
    (factorization: YerFactorization, instruction: YerBlumeyerCommaPumpInstruction) => YerFactorization =
    (factorization: YerFactorization, { factor, action }: YerBlumeyerCommaPumpInstruction): YerFactorization => {
        objectSet(factorization, factor, action === YerBlumeyerCommaPumpAction.ADD)

        return factorization
    }

export {
    nextFactorization,
}
