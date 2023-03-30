import { checkedPawnStep } from './figureSteps/checkedPawnStep';
import { checkedKnightStep } from './figureSteps/checkedKnightStep';
import { checkedBishopStep } from './figureSteps/checkedBishopStep';
import { checkedQueenStep } from './figureSteps/checkedQueenStep';
import { checkedRookStep } from './figureSteps/checkedRookStep';
import { checkedKingStep } from './figureSteps/checkedKingStep';
export function selectFigure(obj, board, prev, isBool, overlaps) {
	switch (obj.name) {
		case 'pawn':
			return checkedPawnStep(obj, board, prev, isBool);
		case 'knight':
			return checkedKnightStep(obj, board, prev, isBool);
		case 'bishop':
			return checkedBishopStep(obj, board, prev, isBool);
		case 'king':
			return checkedKingStep(obj, board, prev, isBool, overlaps);
		case 'queen':
			return checkedQueenStep(obj, board, prev, isBool);
		case 'rook':
			return checkedRookStep(obj, board, prev, isBool);
		default:
			return [];
	}
}
