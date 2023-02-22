import { 
	checkedPawnStep,
	checkedKnightStep,
	checkedBishopStep,
	checkedKingStep,
	checkedQueenStep,
	checkedRookStep
 	} from "./figureSteps/checkedPawnStep";	


export function selectFigure(obj, board, prev, overlaps) {
	switch (obj.name) {
		case 'pawn':
			return checkedPawnStep(obj, board, prev);
		case 'knight':
			return checkedKnightStep(obj, board, prev);
		case 'bishop':
			return checkedBishopStep(obj, board, prev);
		case 'king':
			return checkedKingStep(obj, board, prev, overlaps);
		case 'queen':
			return checkedQueenStep(obj, board, prev);
		case 'rook':
			return checkedRookStep(obj, board, prev);
		default:
			return [];
	}
}
