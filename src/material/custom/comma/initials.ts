import {
    as,
    computeReverse,
    deepEqual,
    INITIAL,
    isEmpty,
    Maybe,
    Ordinal,
    slice,
    use,
} from '@musical-patterns/utilities'
import { computeYerFactorizationByPitchClass } from '../factors'
import { YerFactor, YerFactorization, YerPitchClass } from '../types'
import { nextFactorization } from './nextFactorization'
import { computePumpInverse } from './operations'
import { YerBlumeyerCommaPumpAction, YerBlumeyerCommaPumpInstruction } from './types'

const canUseUndoInstructionsToDetermineCommaShiftDirection:
    (undoInstructions: YerBlumeyerCommaPumpInstruction[]) => boolean =
    (undoInstructions: YerBlumeyerCommaPumpInstruction[]): boolean =>
        !isEmpty(undoInstructions)

const firstInstructionRequiresStartingOnPitchClassNineteen:
    (instructions: YerBlumeyerCommaPumpInstruction[]) => boolean =
    (instructions: YerBlumeyerCommaPumpInstruction[]): boolean => {
        const initialInstruction: Maybe<YerBlumeyerCommaPumpInstruction> = use.Ordinal(instructions, INITIAL)

        return deepEqual(initialInstruction, { action: YerBlumeyerCommaPumpAction.REMOVE, factor: YerFactor._19 }) ||
            deepEqual(initialInstruction, { action: YerBlumeyerCommaPumpAction.ADD, factor: YerFactor._11 }) ||
            deepEqual(initialInstruction, { action: YerBlumeyerCommaPumpAction.ADD, factor: YerFactor._13 }) ||
            deepEqual(initialInstruction, { action: YerBlumeyerCommaPumpAction.ADD, factor: YerFactor._17 })
    }

const computeDirectionOfCommaShiftToBaseInitialFactorizationOn:
    (instructions: YerBlumeyerCommaPumpInstruction[], invertToBeBasedOnOtherSideOfShift: boolean) => YerFactorization =
    (instructions: YerBlumeyerCommaPumpInstruction[], invertToBeBasedOnOtherSideOfShift: boolean): YerFactorization =>
        firstInstructionRequiresStartingOnPitchClassNineteen(instructions) ?
            invertToBeBasedOnOtherSideOfShift ?
                computeYerFactorizationByPitchClass(YerPitchClass._11_13_17) :
                computeYerFactorizationByPitchClass(YerPitchClass._19) :
            invertToBeBasedOnOtherSideOfShift ?
                computeYerFactorizationByPitchClass(YerPitchClass._19) :
                computeYerFactorizationByPitchClass(YerPitchClass._11_13_17)

const instructionsUpToCommaShift: (
    rotation: Ordinal<YerBlumeyerCommaPumpInstruction[]>,
    instructions: YerBlumeyerCommaPumpInstruction[],
) => YerBlumeyerCommaPumpInstruction[] =
    (
        rotation: Ordinal<YerBlumeyerCommaPumpInstruction[]>,
        instructions: YerBlumeyerCommaPumpInstruction[],
    ): YerBlumeyerCommaPumpInstruction[] =>
        slice(instructions, INITIAL, rotation)

const computeUndoInstructions: (
    rotation: Ordinal<YerBlumeyerCommaPumpInstruction[]>,
    instructions: YerBlumeyerCommaPumpInstruction[],
) => YerBlumeyerCommaPumpInstruction[] =
    (
        rotation: Ordinal<YerBlumeyerCommaPumpInstruction[]>,
        instructions: YerBlumeyerCommaPumpInstruction[],
    ): YerBlumeyerCommaPumpInstruction[] => {
        let undoInstructions: YerBlumeyerCommaPumpInstruction[] = instructionsUpToCommaShift(rotation, instructions)
        undoInstructions = computePumpInverse(as.Cycle(undoInstructions))
        undoInstructions = computeReverse(undoInstructions)

        return undoInstructions
    }

const computeInitialFactorization: (
    rotation: Ordinal<YerBlumeyerCommaPumpInstruction[]>,
    instructions: YerBlumeyerCommaPumpInstruction[],
) => YerFactorization =
    (
        rotation: Ordinal<YerBlumeyerCommaPumpInstruction[]>,
        instructions: YerBlumeyerCommaPumpInstruction[],
    ): YerFactorization => {
        const undoInstructions: YerBlumeyerCommaPumpInstruction[] = computeUndoInstructions(rotation, instructions)

        let initialFactorization: YerFactorization =
            canUseUndoInstructionsToDetermineCommaShiftDirection(undoInstructions) ?
                computeDirectionOfCommaShiftToBaseInitialFactorizationOn(undoInstructions, false) :
                computeDirectionOfCommaShiftToBaseInitialFactorizationOn(instructions, true)

        undoInstructions.forEach((instruction: YerBlumeyerCommaPumpInstruction): void => {
            initialFactorization = nextFactorization(initialFactorization, instruction)
        })

        return initialFactorization
    }

export {
    computeInitialFactorization,
}
