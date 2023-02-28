import { checkedBishopStep } from "./checkedBishopStep";
import { checkedRookStep } from "./checkedRookStep";

export function checkedQueenStep(obj, board, prev, isBool) {
	let result = checkedBishopStep(obj, board, prev, isBool);
	let res = result.concat(checkedRookStep(obj, board, prev, isBool));
	return res;
}