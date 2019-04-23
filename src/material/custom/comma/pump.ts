import { forEach, INITIAL, length, Ordinal } from '@musical-patterns/utilities'
import { computeYerPitchClassByFactorization } from '../factors'
import { YerFactorization, YerPitchClass } from '../types'
import { BLUMEYER_COMMA_PUMP_STEP_COUNT } from './constants'
import { computeInitialFactorization } from './initials'
import { nextFactorization } from './nextFactorization'
import { applyCommaShift } from './shift'
import { YerBlumeyerCommaPump, YerBlumeyerCommaPumpInstruction } from './types'

const isFullPump: (candidate: YerPitchClass[][]) => candidate is YerBlumeyerCommaPump =
    (candidate: YerPitchClass[][]): candidate is YerBlumeyerCommaPump =>
        length(candidate) === BLUMEYER_COMMA_PUMP_STEP_COUNT

const computeYerBlumeyerCommaPump: (
    instructions: YerBlumeyerCommaPumpInstruction[],
    rotation?: Ordinal<YerBlumeyerCommaPumpInstruction[]>,
) => YerBlumeyerCommaPump =
    (
        instructions: YerBlumeyerCommaPumpInstruction[],
        rotation: Ordinal<YerBlumeyerCommaPumpInstruction[]> = INITIAL,
    ): YerBlumeyerCommaPump => {
        let currentFactorization: YerFactorization = computeInitialFactorization(rotation, instructions)
        const pump: YerPitchClass[][] = []

        forEach(
            instructions,
            (instruction: YerBlumeyerCommaPumpInstruction, index: Ordinal<YerBlumeyerCommaPumpInstruction[]>): void => {
                const pumpStep: YerPitchClass[] = []

                pumpStep.push(computeYerPitchClassByFactorization(currentFactorization))

                if (index === rotation) {
                    currentFactorization = applyCommaShift(currentFactorization)
                    pumpStep.push(computeYerPitchClassByFactorization(currentFactorization))
                }

                pump.push(pumpStep)

                currentFactorization = nextFactorization(currentFactorization, instruction)
            },
        )

        if (isFullPump(pump)) {
            return pump
        }

        throw new Error(`A full pump was not built; only ${pump.length} steps were built (4 required).`)
    }

export {
    computeYerBlumeyerCommaPump,
}
