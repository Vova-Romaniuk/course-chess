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

export const findPosition = (obj, board, prev) => {
	let arr = [];

	if (obj?.name === '' && prev.length === 0) {
		return [];
	}
	board?.forEach((row, indexRow) => {
		row.forEach((column, indexColumn) => {
			if (column.id === obj.id) {
				arr[0] = indexRow;
				arr[1] = indexColumn;
			}
		});
	});
	return arr;
};
function checkedPawnStep(obj, board, prev) {
	switch (obj.color) {
		case 'white':
			return checkedPawnStepWhite(obj, board, prev);
		case 'black':
			return checkedPawnStepBlack(obj, board, prev);
		default:
			return [];
	}
}

function checkedPawnStepWhite(obj, board, prev) {
	let pos = findPosition(obj, board, prev);
	let res = [];

	if (pos[0] >= 0 && pos[1] <= 7) {
		if (obj.id.includes('2')) {
			res.push([pos[0] - 1, pos[1]]);
			res.push([pos[0] - 2, pos[1]]);
		}
		if (!obj.id.includes('2')) {
			res.push([pos[0] - 1, pos[1]]);
		}

		let arr = res;

		arr.map((element) => {
			if (
				(board[pos[0]][pos[1]].color ===
					board[element[0]][element[1]].color ||
					board[pos[0]][pos[1]].color !==
						board[element[0]][element[1]].color) &&
				board[element[0]][element[1]].name != ''
			) {
				let index = res.indexOf(element);
				res.splice(index, 1);
				if (board[element[0]][element[1]].id.includes('3')) {
					res.splice(index, 1);
				}
			}
		});
		if (
			board[pos[0] - 1][pos[1] + 1]?.name != '' &&
			board[pos[0]][pos[1]]?.color != board[pos[0] - 1][pos[1] + 1]?.color
		) {
			res.push([pos[0] - 1, pos[1] + 1]);
		}
		if (
			board[pos[0] - 1][pos[1] - 1]?.name != '' &&
			board[pos[0]][pos[1]]?.color != board[pos[0] - 1][pos[1] - 1]?.color
		) {
			res.push([pos[0] - 1, pos[1] - 1]);
		}
	}
	return res;
}
function checkedPawnStepBlack(obj, board, prev) {
	let pos = findPosition(obj, board, prev);
	let res = [];
	if (pos[0] >= 0 && pos[1] <= 7) {
		if (obj.id.includes('7')) {
			res.push([pos[0] + 1, pos[1]]);
			res.push([pos[0] + 2, pos[1]]);
		}
		if (!obj.id.includes('7')) {
			res.push([pos[0] + 1, pos[1]]);
		}

		let arr = res;

		arr.map((element) => {
			if (
				(board[pos[0]][pos[1]].color ===
					board[element[0]][element[1]].color ||
					board[pos[0]][pos[1]].color !==
						board[element[0]][element[1]].color) &&
				board[element[0]][element[1]].name != ''
			) {
				let index = res.indexOf(element);
				res.splice(index, 1);
				if (board[element[0]][element[1]].id.includes('6')) {
					res.splice(index, 1);
				}
			}
		});
		if (
			board[pos[0] + 1][pos[1] + 1]?.name != '' &&
			board[pos[0]][pos[1]]?.color != board[pos[0] + 1][pos[1] + 1]?.color
		) {
			res.push([pos[0] + 1, pos[1] + 1]);
		}
		if (
			board[pos[0] + 1][pos[1] - 1]?.name != '' &&
			board[pos[0]][pos[1]]?.color != board[pos[0] + 1][pos[1] - 1]?.color
		) {
			res.push([pos[0] + 1, pos[1] - 1]);
		}
	}
	return res;
}

function checkedKnightStep(obj, board, prev, isBool) {
	let pos = findPosition(obj, board, prev);
	let res = [];
	res.push([pos[0] + 2, pos[1] + 1]);
	res.push([pos[0] + 2, pos[1] - 1]);
	res.push([pos[0] - 2, pos[1] + 1]);
	res.push([pos[0] - 2, pos[1] - 1]);
	res.push([pos[0] + 1, pos[1] + 2]);
	res.push([pos[0] + 1, pos[1] - 2]);
	res.push([pos[0] - 1, pos[1] + 2]);
	res.push([pos[0] - 1, pos[1] - 2]);

	let arr = res.filter(
		(item) => item[0] >= 0 && item[0] <= 7 && item[1] >= 0 && item[1] <= 7
	);
	res = [...arr];
	arr.map((element, index) => {
		if (
			board[pos[0]][pos[1]].color === board[element[0]][element[1]].color
		) {
			let index = res.indexOf(element);
			res.splice(index, 1);
		}
	});
	return res;
}
function checkedBishopStep(obj, board, prev, isBool) {
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
				if (board[pos[0]][pos[1]].color === board[i][j].color) {
					bool = true;
					break;
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
				if (board[pos[0]][pos[1]].color === board[i][j].color) {
					bool = true;
					break;
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
				if (board[pos[0]][pos[1]].color === board[i][j].color) {
					bool = true;
					break;
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
				if (board[pos[0]][pos[1]].color === board[i][j].color) {
					bool = true;
					break;
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
function checkedRookStep(obj, board, prev) {
	let pos = findPosition(obj, board, prev);
	//let pos = [4,3]
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
function checkedQueenStep(obj, board, prev, posKing) {
	let result = checkedBishopStep(obj, board, prev, posKing);
	let res = result.concat(checkedRookStep(obj, board, prev, posKing));
	return res;
}

const checkRocker = (posRook, posKing, board) =>{
	let posibleStep = [];
	posKing[1] > posRook[1] ? posibleStep = [posKing[0],2,posRook[0],3,posRook[0],posRook[1]] : posibleStep = [posKing[0],6,posRook[0],5,posRook[0],posRook[1]];
	return posibleStep;
}
const findRooksUnion = (board, posKing) =>{
	let arrPosRooks = []; 	
	board.forEach((row, indexRow) => {
		row.forEach((column, indexColumn) =>{
			if(column.name === "rook" && column.color === board[posKing[0]][posKing[1]].color){
				arrPosRooks.push([indexRow, indexColumn])
				
			} 
		})
	})
	return arrPosRooks;
}

const isEmptycheckKingBetweenRook = (board,posRook,posKing) =>{
	let bool = false;
	let n = posRook[5] < posKing[1] ? [posRook[5], posKing[1]] : [posKing[1], posRook[5]];
	for (let i= n[0]+1; i < n[1];i++){	
		if(board[posKing[0]][i].name !== ""){
			bool = true;
		}
	}
	
	return bool;
}
function checkedKingStep(obj, board, prev, overlaps = []) {
	let pos = findPosition(obj, board, prev);
	let res = [];
	res.push([pos[0] + 1, pos[1]]);
	res.push([pos[0] - 1, pos[1]]);
	res.push([pos[0] - 1, pos[1] + 1]);
	res.push([pos[0] - 1, pos[1] - 1]);
	res.push([pos[0] + 1, pos[1] + 1]);
	res.push([pos[0] + 1, pos[1] - 1]);
	res.push([pos[0], pos[1] - 1]);
	res.push([pos[0], pos[1] + 1]);
	let arr = res.filter(
		(item) => item[0] >= 0 && item[0] <= 7 && item[1] >= 0 && item[1] <= 7
	);
	res = [...arr];
	arr.map((element, index) => {
		if (
			board[pos[0]][pos[1]].color === board[element[0]][element[1]].color
		) {
			let index = res.indexOf(element);
			res.splice(index, 1);
		}
	});
	let arrPositionUnionRooks = [];
	
	if(!board[pos[0]][pos[1]].checked){
		arrPositionUnionRooks = findRooksUnion(board,pos);
		arrPositionUnionRooks.forEach(el => {
			if(!board[el[0]][el[1]].checked){
				if(!isEmptycheckKingBetweenRook(board,checkRocker(el,pos,board),pos)){
					res.push(checkRocker(el,pos,board));
				}
				
			}
		})
	}
	
	arr = res;
	arr?.map((element) => {
		overlaps[0]?.forEach((el) => {
			if (element[0] === el[0] && element[1] === el[1]) {
				let index = res.indexOf(element);
				res.splice(index, 1);
			}
		});
	});
	
	return res;
}
const rocker = (posKing, board, prev) => {
	if (board[posKing[0]][posKing[1]].checked) {
		return [];
	}
};
const stepDiagonal = (obj, board, prev, isBool) => {
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
						board[i][j].name != ''
					) {
						bool = true;
						break;
					}
				} else {
					if (
						obj.color === board[i][j].color &&
						board[i][j].name != 'king'
					) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name != ''
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
						board[i][j].name != ''
					) {
						bool = true;
						break;
					}
				} else {
					if (
						obj.color === board[i][j].color &&
						board[i][j].name != 'king'
					) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name != ''
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
						board[i][j].name != ''
					) {
						bool = true;
						break;
					}
				} else {
					if (
						obj.color === board[i][j].color &&
						board[i][j].name != 'king'
					) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name != ''
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
						board[i][j].name != ''
					) {
						bool = true;
						break;
					}
				} else {
					if (
						obj.color === board[i][j].color &&
						board[i][j].name != 'king'
					) {
						bool = true;
						break;
					}
					res.push([i, j]);

					if (
						obj.color !== board[i][j].color &&
						board[i][j].name != ''
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
function checkedKnightStepForShah(obj, board, prev) {
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
const stepDirect = (obj, board, prev, isBool) => {
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

			if (obj.color !== board[i][jt].color && board[i][jt].name != '') {
				break;
			}
		} else {
			if (
				obj.color === board[i][jt].color &&
				board[i][jt].name != 'king'
			) {
				break;
			}
			res.push([i, jt]);

			if (obj.color !== board[i][jt].color && board[i][jt].name != '') {
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

			if (obj.color !== board[i][jt].color && board[i][jt].name != '') {
				break;
			}
		} else {
			if (
				obj.color === board[i][jt].color &&
				board[i][jt].name != 'king'
			) {
				break;
			}
			res.push([i, jt]);

			if (obj.color !== board[i][jt].color && board[i][jt].name != '') {
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
			if (obj.color !== board[it][j].color && board[it][j].name != '') {
				break;
			}
		} else {
			if (
				obj.color === board[it][j].color &&
				board[it][j].name != 'king'
			) {
				break;
			}
			res.push([it, j]);
			if (obj.color !== board[it][j].color && board[it][j].name != '') {
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
			if (obj.color !== board[it][j].color && board[it][j].name != '') {
				break;
			}
		} else {
			if (
				obj.color === board[it][j].color &&
				board[it][j].name != 'king'
			) {
				break;
			}
			res.push([it, j]);
			if (obj.color !== board[it][j].color && board[it][j].name != '') {
				break;
			}
		}
	}
	result.push(res);

	return result;
};

export const checkKingAroundAndEnemyFigures = (obj, board, prev) => {
	let pos = findPosition(obj, board, prev);
	let result = stepDiagonal(obj, board, prev);
	let res = result.concat(stepDirect(obj, board, prev));

	let posKing = [];
	if (obj.name != '') {
		board.forEach((row, indexRow) => {
			row.forEach((column, indexColumn) => {
				if (column.name === 'king' && column.color === obj.color) {
					posKing.push(indexRow);
					posKing.push(indexColumn);
				}
			});
		});
	}

	let partArray = [];
	let posFigure = {};

	res.forEach((row) => {
		row.forEach((column) => {
			if (posKing[0] === column[0] && posKing[1] === column[1]) {
				partArray = row;
			}
		});
	});

	for (let i = 0; i < partArray.length; i++) {
		if (
			board[partArray[i][0]][partArray[i][1]].color !=
				board[pos[0]][pos[1]].color &&
			board[partArray[i][0]][partArray[i][1]].color != ''
		) {
			posFigure = board[partArray[i][0]][partArray[i][1]];
			break;
		}
	}

	let curentAvailable = selectFigure(obj, board, prev);
	let availableStep = selectFigure(posFigure, board, prev);
	let posEnemy = findPosition(posFigure, board, prev);

	availableStep.push(posEnemy);

	return isContains(availableStep, pos)
		? intersection(curentAvailable, availableStep)
		: [];
};

const isContains = (availableStep, pos) => {
	let bool = false;
	availableStep.forEach((el1) => {
		if (el1[0] == pos[0] && el1[1] == pos[1]) {
			bool = true;
		}
	});
	return bool;
};

const findPositionForShah = (obj, board) => {
	let arr = [];

	board?.forEach((row, indexRow) => {
		row.forEach((column, indexColumn) => {
			if (column.id === obj.id) {
				arr[0] = indexRow;
				arr[1] = indexColumn;
			}
		});
	});
	return arr;
};

function checkedPawnStepForShah(obj, board, prev) {
	switch (obj.color) {
		case 'white':
			return checkedPawnStepWhiteForShah(obj, board, prev);
		case 'black':
			return checkedPawnStepBlackForShah(obj, board, prev);
		default:
			return [];
	}
}

function checkedPawnStepWhiteForShah(obj, board, prev) {
	let pos = findPositionForShah(obj, board, prev);
	let res = [];

	if (pos[0] >= 0 && pos[1] <= 7) {
		if (obj.id.includes('2')) {
			res.push([pos[0] - 1, pos[1]]);
			res.push([pos[0] - 2, pos[1]]);
		}
		if (!obj.id.includes('2')) {
			res.push([pos[0] - 1, pos[1]]);
		}

		let arr = res;

		arr.map((element) => {
			if (
				board[pos[0]][pos[1]].color ===
					board[element[0]][element[1]].color ||
				board[pos[0]][pos[1]].color !==
					board[element[0]][element[1]].color
			) {
				let index = res.indexOf(element);
				res.splice(index, 1);
				if (board[element[0]][element[1]].id.includes('3')) {
					res.splice(index, 1);
				}
			}
		});
		if (
			board[pos[0]][pos[1]]?.color != board[pos[0] - 1][pos[1] + 1]?.color
		) {
			res.push([pos[0] - 1, pos[1] + 1]);
		}
		if (
			board[pos[0]][pos[1]]?.color != board[pos[0] - 1][pos[1] - 1]?.color
		) {
			res.push([pos[0] - 1, pos[1] - 1]);
		}
	}
	return res;
}
function checkedPawnStepBlackForShah(obj, board, prev) {
	let pos = findPositionForShah(obj, board, prev);
	let res = [];
	if (pos[0] >= 0 && pos[1] <= 7) {
		if (obj.id.includes('7')) {
			res.push([pos[0] + 1, pos[1]]);
			res.push([pos[0] + 2, pos[1]]);
		}
		if (!obj.id.includes('7')) {
			res.push([pos[0] + 1, pos[1]]);
		}

		let arr = res;

		arr.map((element) => {
			if (
				(board[pos[0]][pos[1]].color ===
					board[element[0]][element[1]].color ||
					board[pos[0]][pos[1]].color !==
						board[element[0]][element[1]].color) &&
				board[element[0]][element[1]].name != ''
			) {
				let index = res.indexOf(element);
				res.splice(index, 1);
				if (board[element[0]][element[1]].id.includes('6')) {
					res.splice(index, 1);
				}
			}
		});
		if (
			board[pos[0] + 1][pos[1] + 1]?.name != '' &&
			board[pos[0]][pos[1]]?.color != board[pos[0] + 1][pos[1] + 1]?.color
		) {
			res.push([pos[0] + 1, pos[1] + 1]);
		}
		if (
			board[pos[0] + 1][pos[1] - 1]?.name != '' &&
			board[pos[0]][pos[1]]?.color != board[pos[0] + 1][pos[1] - 1]?.color
		) {
			res.push([pos[0] + 1, pos[1] - 1]);
		}
	}
	return res;
}

export const checkKingCantStep = (obj, board, prev) => {
	let pos = findPosition(obj, board, prev);

	let kingStep = checkedKingStep(obj, board, prev);
	let arrayShahFieldPossibleShahs = [];
	kingStep.forEach((el) => {
		let objCurField = {
			id: board[el[0]][el[1]].id,
			name: board[el[0]][el[1]].name,
			icon: board[el[0]][el[1]].icon,
			checked: false,
			color: board[pos[0]][pos[1]].color,
		};
		let result = stepDiagonal(objCurField, board, prev, true);

		let res = result.concat(stepDirect(objCurField, board, prev, true));
		res = res.concat(
			checkedKnightStepForShah(objCurField, board, prev, true)
		);
		if (enemyAvailable(res, el, board, prev)) {
			arrayShahFieldPossibleShahs.push(el);
		}
	});

	return arrayShahFieldPossibleShahs;
};

const findEnemyFigureIsAvailable = (res, pos, board) => {
	let posFigure = {};
	let arrPosFigure = [];
	for (let row = 0; row < res.length; row++) {
		for (let col = 0; col < res[row].length; col++) {
			if (
				board[res[row][col][0]][res[row][col][1]].color !=
					board[pos[0]][pos[1]].color &&
				board[res[row][col][0]][res[row][col][1]].color != ''
			) {
				posFigure = board[res[row][col][0]][res[row][col][1]];
				arrPosFigure.push(posFigure);
				break;
			}
		}
	}

	return arrPosFigure;
};

const enemyAvailable = (res, pos, board, prev) => {
	let arrBool = [];
	let bool = false;
	let arrPosFigure = findEnemyFigureIsAvailable(res, pos, board, prev);
	// console.log(pos)
	//console.log(arrPosFigure)
	arrPosFigure.map((el) => {
		let availableStep = selectFigure(el, board, prev);
		if (el.name === 'pawn') {
			availableStep = checkedPawnStepForShah(el, board, prev);
			let posPawm = findPositionForShah(el, board);
			//console.log(availableStep)
			let res = availableStep;
			res.forEach((element) => {
				if (
					element[1] % 2 === pos[1] % 2 &&
					posPawm[1] % 2 === pos[1] % 2
				) {
					let index = availableStep.indexOf(element);
					availableStep.splice(index, 1);
				}
			});
		}
		arrBool.push(isContains(availableStep, pos));
	});

	arrBool.map((el) => {
		if (el) bool = true;
	});

	return bool;
};

const findEnemyPartArrayIsAvailable = (res, pos, board) => {
	let partArray = [];
	for (let row = 0; row < res.length; row++) {
		for (let col = 0; col < res[row].length; col++) {
			if (
				board[res[row][col][0]][res[row][col][1]].color !=
					board[pos[0]][pos[1]].color &&
				board[res[row][col][0]][res[row][col][1]].color != ''
			) {
				partArray.push(res[row]);
				break;
			}
		}
	}

	return partArray;
};

const unionAvailable = (res, pos, board, prev) => {
	let partArray = findEnemyPartArrayIsAvailable(res, pos, board, prev);

	return partArray;
};
export const checkedShah = (obj, board, prev, kingPos) => {
	let objKing = board[kingPos[0]][kingPos[1]];

	let pos = findPosition(objKing, board, prev);
	let result = stepDiagonal(objKing, board, prev, true);
	let res = result.concat(stepDirect(objKing, board, prev, true));
	res = res.concat(checkedKnightStepForShah(obj, board, prev, true));

	let unionSteps = unionAvailable(res, pos, board, prev);
	let kingSteps = selectFigure(objKing, board, prev, unionSteps);
	let resKingSteps = kingSteps;
	if (unionSteps.length != 0) {
		resKingSteps?.map((element) => {
			unionSteps[0].forEach((el) => {
				if (element[0] === el[0] && element[1] === el[1]) {
					let index = res.indexOf(element);
					kingSteps.splice(index, 1);
				}
			});
		});
	}

	unionSteps = unionSteps.length != 0 ? unionSteps[0].concat(kingSteps) : [];
	return unionSteps;
};

export const checkUnionOverlaps = (overlaps, board, prev, posKing) => {
	return checkAllUnionFiguresOveplapsWhenShah(overlaps, board, prev, posKing);
};
const intersection = (curentAvailable, availableStep) => {
	let res = [];

	curentAvailable?.forEach((el1) => {
		availableStep?.forEach((el2) => {
			if (el1[0] === el2[0] && el1[1] === el2[1]) {
				res.push(el1);
			}
		});
	});

	return res;
};
const checkAllUnionFiguresOveplapsWhenShah = (overlaps, board, prev, king) => {
	let result = [];
	if (overlaps.length != 0) {
		board.forEach((row) => {
			row.forEach((col) => {
				if (
					col.color == board[king[0]][king[1]].color &&
					col.name != 'king'
				) {
					let currentFig = selectFigure(col, board, prev);
					let res = intersection(overlaps, currentFig);
					res.length != 0 && result.push(res);
				}
			});
		});
	}

	return result;
};

const responsibility = (id) => {
	switch (id) {
		case 'a8':
			return [0, 0];
		case 'a7':
			return [1, 0];
		case 'a6':
			return [2, 0];
		case 'a5':
			return [3, 0];
		case 'a4':
			return [4, 0];
		case 'a3':
			return [5, 0];
		case 'a2':
			return [6, 0];
		case 'a1':
			return [7, 0];
		case 'b8':
			return [0, 1];
		case 'b7':
			return [1, 1];
		case 'b6':
			return [2, 1];
		case 'b5':
			return [3, 1];
		case 'b4':
			return [4, 1];
		case 'b3':
			return [5, 1];
		case 'b2':
			return [6, 1];
		case 'b1':
			return [7, 1];
		case 'c8':
			return [0, 2];
		case 'c7':
			return [1, 2];
		case 'c6':
			return [2, 2];
		case 'c5':
			return [3, 2];
		case 'c4':
			return [4, 2];
		case 'c3':
			return [5, 2];
		case 'c2':
			return [6, 2];
		case 'c1':
			return [7, 2];
		case 'd8':
			return [0, 3];
		case 'd7':
			return [1, 3];
		case 'd6':
			return [2, 3];
		case 'd5':
			return [3, 3];
		case 'd4':
			return [4, 3];
		case 'd3':
			return [5, 3];
		case 'd2':
			return [6, 3];
		case 'd1':
			return [7, 3];
		case 'e8':
			return [0, 4];
		case 'e7':
			return [1, 4];
		case 'e6':
			return [2, 4];
		case 'e5':
			return [3, 4];
		case 'e4':
			return [4, 4];
		case 'e3':
			return [5, 4];
		case 'e2':
			return [6, 4];
		case 'e1':
			return [7, 4];
		case 'f8':
			return [0, 5];
		case 'f7':
			return [1, 5];
		case 'f6':
			return [2, 5];
		case 'f5':
			return [3, 5];
		case 'f4':
			return [4, 5];
		case 'f3':
			return [5, 5];
		case 'f2':
			return [6, 5];
		case 'f1':
			return [7, 5];
		case 'g8':
			return [0, 6];
		case 'g7':
			return [1, 6];
		case 'g6':
			return [2, 6];
		case 'g5':
			return [3, 6];
		case 'g4':
			return [4, 6];
		case 'g3':
			return [5, 6];
		case 'g2':
			return [6, 6];
		case 'g1':
			return [7, 6];
		case 'h8':
			return [0, 7];
		case 'h7':
			return [1, 7];
		case 'h6':
			return [2, 7];
		case 'h5':
			return [3, 7];
		case 'h4':
			return [4, 7];
		case 'h3':
			return [5, 7];
		case 'h2':
			return [6, 7];
		case 'h1':
			return [7, 7];
		default:
			return [];
	}
};


