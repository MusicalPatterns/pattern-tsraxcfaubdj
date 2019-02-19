import { forEach, INITIAL, Ordinal } from '@musical-patterns/utilities'
import { getYerPitchClassByFactorization } from '../factors'
import { YerFactorization, YerPitchClass } from '../types'
import { calculateInitialFactorization } from './initial'
import { nextFactorization } from './nextFactorization'
import { applyCommaShift } from './shift'
import { YerBlumeyerCommaPump, YerBlumeyerCommaPumpInstruction } from './types'

const buildYerBlumeyerCommaPump:
    (instructions: YerBlumeyerCommaPumpInstruction[], rotation?: Ordinal) => YerBlumeyerCommaPump =
    (instructions: YerBlumeyerCommaPumpInstruction[], rotation: Ordinal = INITIAL): YerBlumeyerCommaPump => {
        let currentFactorization: YerFactorization = calculateInitialFactorization(rotation, instructions)
        const pump: YerPitchClass[][] = []

        forEach(
            instructions,
            (instruction: YerBlumeyerCommaPumpInstruction, index: Ordinal): void => {
                const pumpStep: YerPitchClass[] = []

                pumpStep.push(getYerPitchClassByFactorization(currentFactorization))

                if (index === rotation) {
                    currentFactorization = applyCommaShift(currentFactorization)
                    pumpStep.push(getYerPitchClassByFactorization(currentFactorization))
                }

                pump.push(pumpStep)

                currentFactorization = nextFactorization(currentFactorization, instruction)
            },
        )

        return pump as YerBlumeyerCommaPump
    }

export {
    buildYerBlumeyerCommaPump,
}
