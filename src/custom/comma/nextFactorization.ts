import { YerFactorization } from '../types'
import { Instruction, YerBlumeyerCommaPumpAction } from './types'

const nextFactorization: (factorization: YerFactorization, instruction: Instruction) => YerFactorization =
    (factorization: YerFactorization, { factor, action }: Instruction): YerFactorization => {
        factorization[ factor ] = action === YerBlumeyerCommaPumpAction.ADD

        return factorization
    }

export {
    nextFactorization,
}
