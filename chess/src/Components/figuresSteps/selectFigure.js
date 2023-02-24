import { checkedPawnStep} from "./figureSteps/checkedPawnStep";	
import { checkedKnightStep } from "./figureSteps/checkedKnightStep";
import { checkedBishopStep } from "./figureSteps/checkedBishopStep";
import { checkedQueenStep } from "./figureSteps/checkedQueenStep";
import { checkedRookStep } from "./figureSteps/checkedRookStep";
import { checkedKingStep } from "./figureSteps/checkedKingStep";
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
