import { findPosition } from "../helpers";

export function checkedRookStep(obj, board, prev) {
	let pos = findPosition(obj, board, prev);
	let res = [];
	let it = pos[0];
	let jt = pos[1];

	//top
	for (let i = pos[0] - 1; i >= 0; i--) {
		if (board[pos[0]][pos[1]].color === board[i][jt].color) {
			break;
		}
		res.push([i, jt]);
		if (
			board[pos[0]][pos[1]].color !== board[i][jt].color &&
			board[i][jt].name != ''
		) {
			break;
		}
	}
	//bottom
	for (let i = pos[0] + 1; i <= 7; i++) {
		if (board[pos[0]][pos[1]].color === board[i][jt].color) {
			break;
		}
		res.push([i, jt]);
		if (
			board[pos[0]][pos[1]].color !== board[i][jt].color &&
			board[i][jt].name != ''
		) {
			break;
		}
	}
	//right
	for (let j = pos[1] + 1; j <= 7; j++) {
		if (board[pos[0]][pos[1]].color === board[it][j].color) {
			break;
		}
		res.push([it, j]);
		if (
			board[pos[0]][pos[1]].color !== board[it][j].color &&
			board[it][j].name != ''
		) {
			break;
		}
	}
	//left
	for (let j = pos[1] - 1; j >= 0; j--) {
		if (board[pos[0]][pos[1]].color === board[it][j].color) {
			break;
		}
		res.push([it, j]);
		if (
			board[pos[0]][pos[1]].color !== board[it][j].color &&
			board[it][j].name != ''
		) {
			break;
		}
	}
	return res;
}