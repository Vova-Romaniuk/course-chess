import { checkedBishopStep } from "./checkedBishopStep";
import { checkedRookStep } from "./checkedRookStep";

export function checkedQueenStep(obj, board, prev, posKing) {
	let result = checkedBishopStep(obj, board, prev, posKing);
	let res = result.concat(checkedRookStep(obj, board, prev, posKing));
	return res;
}