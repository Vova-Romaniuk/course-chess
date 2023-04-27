import { selectFigure } from '../selectFigure';
import { isContains } from '../helpers';
import { checkedKingStep } from '../figureSteps/checkedKingStep';
import { checkedKnightStepForShah } from '../helpers/allSteps';
import { checkedPawnStepForShah } from './figureSteps';
import { findPositionForShah } from '../helpers';
import { findPosition } from '../helpers';
import { stepDiagonal, stepDirect } from '../helpers/allSteps';

export const checkKingAroundAndEnemyFigures = (obj, board, prev) => {
	let pos = findPosition(obj, board, prev);
	let result = stepDiagonal(obj, board, prev);
	let res = result.concat(stepDirect(obj, board, prev));

	let posKing = [];
	if (obj.name !== '') {
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
			board[partArray[i][0]][partArray[i][1]].color !== ''
		) {
			posFigure = board[partArray[i][0]][partArray[i][1]];
			break;
		}
	}

	let curentAvailable = selectFigure(obj, board, prev, false);
	let availableStep = selectFigure(posFigure, board, prev, false);
	let posEnemy = findPosition(posFigure, board, prev);

	availableStep.push(posEnemy);

	return isContains(availableStep, pos)
		? (curentAvailable, availableStep)
		: [];
};
const findEnemyPosKing = (board, posKing) => {
	let res = [];
	board.forEach((row, indexRow) => {
		row?.forEach((column, indexColumn) => {
			if (
				column.name === 'king' &&
				column.color !== board[posKing[0]][posKing[1]].color &&
				column.name !== ''
			) {
				console.log('work');
				res = [indexRow, indexColumn];
			}
		});
	});
	return res;
};
export const checkKingsNotMeets = (board, pos) => {
	let enemyKingPos = findEnemyPosKing(board, pos);
	let enemyKingSteps =
		enemyKingPos.length > 0
			? selectFigure(
					board[enemyKingPos[0]][enemyKingPos[1]],
					board,
					enemyKingPos
			  )
			: [];
	let currentKingSteps = selectFigure(board[pos[0]][pos[1]], board, pos);
	return intersection(enemyKingSteps, currentKingSteps);
};
export const checkKingCantStep = (obj, board, prev, posFigureGaveShah) => {
	let pos = findPosition(obj, board, prev);

	let kingStep = selectFigure(obj, board, prev, false);
	let arrayShahFieldPossibleShahs = [];

	kingStep.forEach((el) => {
		let objCurField = {
			id: board[el[0]][el[1]].id,
			name: board[el[0]][el[1]].name,
			icon: board[el[0]][el[1]].icon,
			checked: board[el[0]][el[1]].checked,
			color: board[pos[0]][pos[1]].color,
		};
		let result =
			objCurField.name === ''
				? stepDiagonal(objCurField, board, prev, true)
				: stepDiagonal(objCurField, board, prev, false);

		let res =
			objCurField.name === ''
				? result.concat(stepDirect(objCurField, board, prev, true))
				: result.concat(stepDirect(objCurField, board, prev, false));
		res =
			objCurField.name === ''
				? res.concat(
						checkedKnightStepForShah(objCurField, board, prev, true)
				  )
				: res.concat(
						checkedKnightStepForShah(objCurField, board, prev, true)
				  );
		if (enemyAvailable(res, el, board, prev, posFigureGaveShah)) {
			arrayShahFieldPossibleShahs.push(el);
		}
	});
	arrayShahFieldPossibleShahs.concat(checkKingsNotMeets(board, pos));
	console.log(arrayShahFieldPossibleShahs);
	return arrayShahFieldPossibleShahs;
};

const findEnemyFigureIsAvailable = (
	res,
	pos,
	board,
	prev,
	posFigureGaveShah
) => {
	let posFigure = {};
	let arrPosFigure = [];
	for (let row = 0; row < res.length; row++) {
		for (let col = 0; col < res[row].length; col++) {
			if (
				(board[res[row][col][0]][res[row][col][1]].color !=
					board[pos[0]][pos[1]].color &&
					board[res[row][col][0]][res[row][col][1]].color !== '') ||
				board[res[row][col][0]][res[row][col][1]].color ==
					board[posFigureGaveShah[0]][posFigureGaveShah[1]].color
			) {
				posFigure = board[res[row][col][0]][res[row][col][1]];
				arrPosFigure.push(posFigure);
				break;
			}
		}
	}

	return arrPosFigure;
};

const enemyAvailable = (res, pos, board, prev, posFigureGaveShah) => {
	let arrBool = [];
	let bool = false;

	let arrPosFigure = findEnemyFigureIsAvailable(
		res,
		pos,
		board,
		prev,
		posFigureGaveShah
	);
	arrPosFigure.map((el) => {
		let availableStep = selectFigure(el, board, prev, true);
		if (el.name === 'pawn') {
			availableStep = checkedPawnStepForShah(el, board, prev);
			let posPawm = findPositionForShah(el, board);
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
				board[res[row][col][0]][res[row][col][1]].color !== ''
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
	console.log(board[pos[0]][pos[1]]);
	let result = stepDiagonal(objKing, board, prev, true);
	let res = result.concat(stepDirect(objKing, board, prev, true));
	res = res.concat(checkedKnightStepForShah(obj, board, prev, true));

	let unionSteps = unionAvailable(res, pos, board, prev);
	let kingSteps = checkedKingStep(objKing, board, prev, false);

	let resKingSteps = kingSteps;
	if (unionSteps.length !== 0) {
		resKingSteps?.map((element) => {
			unionSteps[0].forEach((el) => {
				if (element[0] === el[0] && element[1] === el[1]) {
					let index = res.indexOf(element);
					kingSteps.splice(index, 1);
				}
			});
		});
	}

	unionSteps = unionSteps.length !== 0 ? unionSteps[0].concat(kingSteps) : [];
	return unionSteps;
};

export const checkUnionOverlaps = (overlaps, board, prev, posKing) => {
	return checkAllUnionFiguresOveplapsWhenShah(overlaps, board, prev, posKing);
};
export const intersection = (curentAvailable, availableStep) => {
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
	if (overlaps.length !== 0) {
		board.forEach((row) => {
			row.forEach((col) => {
				if (
					col.color == board[king[0]][king[1]].color &&
					col.name !== 'king'
				) {
					let currentFig = selectFigure(col, board, prev, false);
					let res = intersection(overlaps, currentFig);
					res.length !== 0 && result.push(res);
				}
			});
		});
	}

	return result;
};
