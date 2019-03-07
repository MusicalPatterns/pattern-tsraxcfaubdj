import { forEach, INITIAL, Ordinal } from '@musical-patterns/utilities'
import { getYerPitchClassByFactorization } from '../factors'
import { YerFactorization, YerPitchClass } from '../types'
import { BLUMEYER_COMMA_PUMP_STEP_COUNT } from './constants'
import { calculateInitialFactorization } from './initial'
import { nextFactorization } from './nextFactorization'
import { applyCommaShift } from './shift'
import { YerBlumeyerCommaPump, YerBlumeyerCommaPumpInstruction } from './types'

const isFullPump: (candidate: YerPitchClass[][]) => candidate is YerBlumeyerCommaPump =
    (candidate: YerPitchClass[][]): candidate is YerBlumeyerCommaPump =>
        candidate.length === BLUMEYER_COMMA_PUMP_STEP_COUNT

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

        if (isFullPump(pump)) {
            return pump
        }
        else {
            throw new Error(`A full pump was not built; only ${pump.length} steps were built (4 required).`)
        }
    }

export {
    buildYerBlumeyerCommaPump,
}
