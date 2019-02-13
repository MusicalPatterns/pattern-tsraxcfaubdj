import { getYerPitchClassByFactorization } from '../factors'
import { YerFactorization, YerPitchClass } from '../types'
import { nextFactorization } from './nextFactorization'
import { applyCommaShift, commaShiftPossibleHere } from './shift'
import { Instruction } from './types'

const buildYerBlumeyerCommaPump: (instructions: Instruction[]) => YerPitchClass[][] =
    (instructions: Instruction[]): YerPitchClass[][] => {
        let currentFactorization: YerFactorization = {}
        const pump: YerPitchClass[][] = []
        let commaShiftDone: boolean = false
        instructions.forEach((instruction: Instruction): void => {
            const pumpStep: YerPitchClass[] = []
            pumpStep.push(getYerPitchClassByFactorization(currentFactorization))

            if (!commaShiftDone && commaShiftPossibleHere(currentFactorization)) {
                commaShiftDone = true
                currentFactorization = applyCommaShift(currentFactorization)
                pumpStep.push(getYerPitchClassByFactorization(currentFactorization))
            }

            pump.push(pumpStep)

            currentFactorization = nextFactorization(currentFactorization, instruction)
        })

        return pump
    }

export {
    buildYerBlumeyerCommaPump,
}
