import { findPosition, findPositionForShah } from '.';

export const stepDiagonal = (obj, board, prev, isBool) => {
	let pos = isBool
		? findPositionForShah(obj, board, prev)
		: findPosition(obj, board, prev);
	let res = [];
	let result = [];

	let bool = false;
	//лівий-верх
	let n = pos[0] - pos[1] >= 0 ? pos[0] - pos[1] : 0;
	let ex = pos[1] - 1;
	for (let i = pos[0] - 1; i >= n; i--) {
		for (let j = pos[1] - 1; j >= 0; j--) {
			if (j == ex) {
				if (isBool) {
					if (obj.color === board[i][j].color) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name !== ''
					) {
						bool = true;
						break;
					}
				} else {
					if (
						obj.color === board[i][j].color &&
						board[i][j].name !== 'king'
					) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name !== ''
					) {
						bool = true;
						break;
					}
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
				if (isBool) {
					if (obj.color === board[i][j].color) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name !== ''
					) {
						bool = true;
						break;
					}
				} else {
					if (
						obj.color === board[i][j].color &&
						board[i][j].name !== 'king'
					) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name !== ''
					) {
						bool = true;
						break;
					}
				}
			}
		}
		if (bool) {
			break;
		}
		ex++;
	}

	result.push(res);
	res = [];
	bool = false;
	//правий-верх
	n = Math.abs(pos[1] - 7) - pos[0] < 0 ? pos[1] - Math.abs(pos[0] - 7) : 0;
	ex = pos[1] + 1;
	for (let i = pos[0] - 1; i >= n; i--) {
		for (let j = pos[1] + 1; j <= 7; j++) {
			if (j == ex) {
				if (isBool) {
					if (obj.color === board[i][j].color) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name !== ''
					) {
						bool = true;
						break;
					}
				} else {
					if (
						obj.color === board[i][j].color &&
						board[i][j].name !== 'king'
					) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name !== ''
					) {
						bool = true;
						break;
					}
				}
			}
		}
		if (bool) {
			break;
		}
		ex++;
	}

	bool = false;

	//лівий-низ

	n = Math.abs(pos[0] - 7) - pos[1] > 0 ? pos[0] + pos[1] : 7;
	ex = pos[1] - 1;
	for (let i = pos[0] + 1; i <= n; i++) {
		for (let j = pos[1] - 1; j >= 0; j--) {
			if (j == ex) {
				if (isBool) {
					if (obj.color === board[i][j].color) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name !== ''
					) {
						bool = true;
						break;
					}
				} else {
					if (
						obj.color === board[i][j].color &&
						board[i][j].name !== 'king'
					) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name !== ''
					) {
						bool = true;
						break;
					}
				}
			}
		}
		if (bool) {
			break;
		}
		ex--;
	}
	result.push(res);
	res = [];
	bool = false;

	return result;
};

export const stepDirect = (obj, board, prev, isBool) => {
	let pos = isBool
		? findPositionForShah(obj, board, prev)
		: findPosition(obj, board, prev);

	let res = [];
	let result = [];
	let it = pos[0];
	let jt = pos[1];

	//top
	for (let i = pos[0] - 1; i >= 0; i--) {
		if (isBool) {
			if (obj.color === board[i][jt].color) {
				break;
			}
			res.push([i, jt]);

			if (obj.color !== board[i][jt].color && board[i][jt].name !== '') {
				break;
			}
		} else {
			if (
				obj.color === board[i][jt].color &&
				board[i][jt].name !== 'king'
			) {
				break;
			}
			res.push([i, jt]);

			if (obj.color !== board[i][jt].color && board[i][jt].name !== '') {
				break;
			}
		}
	}

	//bottom
	for (let i = pos[0] + 1; i <= 7; i++) {
		if (isBool) {
			if (obj.color === board[i][jt].color) {
				break;
			}
			res.push([i, jt]);

			if (obj.color !== board[i][jt].color && board[i][jt].name !== '') {
				break;
			}
		} else {
			if (
				obj.color === board[i][jt].color &&
				board[i][jt].name !== 'king'
			) {
				break;
			}
			res.push([i, jt]);

			if (obj.color !== board[i][jt].color && board[i][jt].name !== '') {
				break;
			}
		}
	}
	result.push(res);
	res = [];
	//right
	for (let j = pos[1] + 1; j <= 7; j++) {
		if (isBool) {
			if (obj.color === board[it][j].color) {
				break;
			}
			res.push([it, j]);
			if (obj.color !== board[it][j].color && board[it][j].name !== '') {
				break;
			}
		} else {
			if (
				obj.color === board[it][j].color &&
				board[it][j].name !== 'king'
			) {
				break;
			}
			res.push([it, j]);
			if (obj.color !== board[it][j].color && board[it][j].name !== '') {
				break;
			}
		}
	}

	//left
	for (let j = pos[1] - 1; j >= 0; j--) {
		if (isBool) {
			if (obj.color === board[it][j].color) {
				break;
			}
			res.push([it, j]);
			if (obj.color !== board[it][j].color && board[it][j].name !== '') {
				break;
			}
		} else {
			if (
				obj.color === board[it][j].color &&
				board[it][j].name !== 'king'
			) {
				break;
			}
			res.push([it, j]);
			if (obj.color !== board[it][j].color && board[it][j].name !== '') {
				break;
			}
		}
	}
	result.push(res);

	return result;
};

export function checkedKnightStepForShah(obj, board, prev) {
	let pos = findPositionForShah(obj, board, prev);
	let res = [];
	res.push([[pos[0] + 2, pos[1] + 1]]);
	res.push([[pos[0] + 2, pos[1] - 1]]);
	res.push([[pos[0] - 2, pos[1] + 1]]);
	res.push([[pos[0] - 2, pos[1] - 1]]);
	res.push([[pos[0] + 1, pos[1] + 2]]);
	res.push([[pos[0] + 1, pos[1] - 2]]);
	res.push([[pos[0] - 1, pos[1] + 2]]);
	res.push([[pos[0] - 1, pos[1] - 2]]);
	let arr = res.filter(
		(item) =>
			item[0][0] >= 0 &&
			item[0][0] <= 7 &&
			item[0][1] >= 0 &&
			item[0][1] <= 7
	);
	res = [...arr];
	arr.map((element, index) => {
		if (obj.color === board[element[0][0]][element[0][1]].color) {
			let index = res.indexOf(element);
			res.splice(index, 1);
		}
	});

	return res;
}
