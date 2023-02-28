import { findPosition } from "../helpers";

export function checkedBishopStep(obj, board, prev, isBool) {
	let pos = findPosition(obj, board, prev);

	let res = [];
	let n;
	let ex;
	let bool = false;
	//правий-верх
	n = Math.abs(pos[1] - 7) - pos[0] < 0 ? pos[1] - Math.abs(pos[0] - 7) : 0;
	ex = pos[1] + 1;
	for (let i = pos[0] - 1; i >= n; i--) {
		for (let j = pos[1] + 1; j <= 7; j++) {
			if (j == ex) {
				if(!isBool){
					if (board[pos[0]][pos[1]].color === board[i][j].color) {
						bool = true;
						break;
					}
				}	
				res.push([i, j]);
				if (
					board[pos[0]][pos[1]].color !== board[i][j].color &&
					board[i][j].name != ''
				) {
					bool = true;
					break;
				}
			}
		}
		if (bool) {
			break;
		}
		ex++;
	}
	bool = false;

	//лівий-верх
	n = pos[0] - pos[1] >= 0 ? pos[0] - pos[1] : 0;
	ex = pos[1] - 1;
	for (let i = pos[0] - 1; i >= n; i--) {
		for (let j = pos[1] - 1; j >= 0; j--) {
			if (j == ex) {
				if(!isBool){
					if (board[pos[0]][pos[1]].color === board[i][j].color) {
						bool = true;
						break;
					}
				}	
				res.push([i, j]);

				if (
					board[pos[0]][pos[1]].color !== board[i][j].color &&
					board[i][j].name != ''
				) {
					bool = true;
					break;
				}
			}
		}
		if (bool) {
			break;
		}
		ex--;
	}
	bool = false;

	//лівий-низ

	n = Math.abs(pos[0] - 7) - pos[1] > 0 ? pos[0] + pos[1] : 7;
	ex = pos[1] - 1;
	for (let i = pos[0] + 1; i <= n; i++) {
		for (let j = pos[1] - 1; j >= 0; j--) {
			if (j == ex) {
				if(!isBool){
					if (board[pos[0]][pos[1]].color === board[i][j].color) {
						bool = true;
						break;
					}
				}
				
				res.push([i, j]);

				if (
					board[pos[0]][pos[1]].color !== board[i][j].color &&
					board[i][j].name != ''
				) {
					bool = true;
					break;
				}
			}
		}
		if (bool) {
			break;
		}
		ex--;
	}
	bool = false;
	// правий-низ

	n = pos[0] - pos[1] < 0 ? pos[0] + Math.abs(pos[1] - 7) : 7;
	ex = pos[1] + 1;
	for (let i = pos[0] + 1; i <= n; i++) {
		for (let j = pos[1] + 1; j <= 7; j++) {
			if (j == ex) {
				if(!isBool){
					if (board[pos[0]][pos[1]].color === board[i][j].color) {
						bool = true;
						break;
					}
				}	
				res.push([i, j]);

				if (
					board[pos[0]][pos[1]].color !== board[i][j].color &&
					board[i][j].name != ''
				) {
					bool = true;
					break;
				}
			}
		}
		if (bool) {
			break;
		}
		ex++;
	}
	bool = false;
	return res;
}