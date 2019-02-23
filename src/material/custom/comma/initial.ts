import { apply, deepEqual, INITIAL, Ordinal, to } from '@musical-patterns/utilities'
import { getYerFactorizationByPitchClass } from '../factors'
import { YerFactor, YerFactorization, YerPitchClass } from '../types'
import { nextFactorization } from './nextFactorization'
import { inverse } from './operations'
import { YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpInstruction } from './types'

const canUseUndoInstructionsToDetermineCommaShiftDirection:
    (undoInstructions: YerBlumeyerCommaPumpInstruction[]) => boolean =
    (undoInstructions: YerBlumeyerCommaPumpInstruction[]): boolean =>
        !!undoInstructions.length

const firstInstructionRequiresStartingOnPitchClassNineteen:
    (instructions: YerBlumeyerCommaPumpInstruction[]) => boolean =
    (instructions: YerBlumeyerCommaPumpInstruction[]): boolean => {
        const initialInstruction: YerBlumeyerCommaPumpInstruction = apply.Ordinal(instructions, INITIAL)

        return deepEqual(initialInstruction, { action: YerBlumeyerCommaPumpAction.REMOVE, factor: YerFactor._19 }) ||
            deepEqual(initialInstruction, { action: YerBlumeyerCommaPumpAction.ADD, factor: YerFactor._11 }) ||
            deepEqual(initialInstruction, { action: YerBlumeyerCommaPumpAction.ADD, factor: YerFactor._13 }) ||
            deepEqual(initialInstruction, { action: YerBlumeyerCommaPumpAction.ADD, factor: YerFactor._17 })
    }

const calculateDirectionOfCommaShiftToBaseInitialFactorizationOn:
    (instructions: YerBlumeyerCommaPumpInstruction[], invertToBeBasedOnOtherSideOfShift: boolean) => YerFactorization =
    (instructions: YerBlumeyerCommaPumpInstruction[], invertToBeBasedOnOtherSideOfShift: boolean): YerFactorization =>
        firstInstructionRequiresStartingOnPitchClassNineteen(instructions) ?
            invertToBeBasedOnOtherSideOfShift ?
                getYerFactorizationByPitchClass(YerPitchClass._11_13_17) :
                getYerFactorizationByPitchClass(YerPitchClass._19) :
            invertToBeBasedOnOtherSideOfShift ?
                getYerFactorizationByPitchClass(YerPitchClass._19) :
                getYerFactorizationByPitchClass(YerPitchClass._11_13_17)

const instructionsUpToCommaShift:
    (rotation: Ordinal, instructions: YerBlumeyerCommaPumpInstruction[]) => YerBlumeyerCommaPumpInstruction[] =
    (rotation: Ordinal, instructions: YerBlumeyerCommaPumpInstruction[]): YerBlumeyerCommaPumpInstruction[] =>
        instructions.slice(INITIAL, rotation)

const calculateUndoInstructions:
    (rotation: Ordinal, instructions: YerBlumeyerCommaPumpInstruction[]) => YerBlumeyerCommaPumpInstruction[] =
    (rotation: Ordinal, instructions: YerBlumeyerCommaPumpInstruction[]): YerBlumeyerCommaPumpInstruction[] => {
        let undoInstructions: YerBlumeyerCommaPumpInstruction[] = instructionsUpToCommaShift(rotation, instructions)
        undoInstructions = inverse(to.Cycle(undoInstructions))
        undoInstructions.reverse()

        return undoInstructions
    }

const calculateInitialFactorization:
    (rotation: Ordinal, instructions: YerBlumeyerCommaPumpInstruction[]) => YerFactorization =
    (rotation: Ordinal, instructions: YerBlumeyerCommaPumpInstruction[]): YerFactorization => {
        const undoInstructions: YerBlumeyerCommaPumpInstruction[] = calculateUndoInstructions(rotation, instructions)

        let initialFactorization: YerFactorization =
            canUseUndoInstructionsToDetermineCommaShiftDirection(undoInstructions) ?
                calculateDirectionOfCommaShiftToBaseInitialFactorizationOn(undoInstructions, false) :
                calculateDirectionOfCommaShiftToBaseInitialFactorizationOn(instructions, true)

        undoInstructions.forEach((instruction: YerBlumeyerCommaPumpInstruction): void => {
            initialFactorization = nextFactorization(initialFactorization, instruction)
        })

        return initialFactorization
    }

export {
    calculateInitialFactorization,
}
