import { YerFactorization } from '../types'
import { YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpInstruction } from './types'

const nextFactorization:
    (factorization: YerFactorization, instruction: YerBlumeyerCommaPumpInstruction) => YerFactorization =
    (factorization: YerFactorization, { factor, action }: YerBlumeyerCommaPumpInstruction): YerFactorization => {
        factorization[ factor ] = action === YerBlumeyerCommaPumpAction.ADD

        return factorization
    }

export {
    nextFactorization,
}
