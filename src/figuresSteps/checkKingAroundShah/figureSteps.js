import { findPositionForShah } from '../helpers';

export function checkedPawnStepForShah(obj, board, prev) {
	switch (obj.color) {
		case 'white':
			return checkedPawnStepWhiteForShah(obj, board, prev);
		case 'black':
			return checkedPawnStepBlackForShah(obj, board, prev);
		default:
			return [];
	}
}

export function checkedPawnStepWhiteForShah(obj, board, prev) {
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
			board[pos[0]][pos[1]]?.color !==
			board[pos[0] - 1][pos[1] + 1]?.color
		) {
			res.push([pos[0] - 1, pos[1] + 1]);
		}
		if (
			board[pos[0]][pos[1]]?.color !==
			board[pos[0] - 1][pos[1] - 1]?.color
		) {
			res.push([pos[0] - 1, pos[1] - 1]);
		}
	}
	return res;
}
export function checkedPawnStepBlackForShah(obj, board, prev) {
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
				board[element[0]][element[1]].name !== ''
			) {
				let index = res.indexOf(element);
				res.splice(index, 1);
				if (board[element[0]][element[1]].id.includes('6')) {
					res.splice(index, 1);
				}
			}
		});
		if (
			board[pos[0] + 1][pos[1] + 1]?.name !== '' &&
			board[pos[0]][pos[1]]?.color !==
				board[pos[0] + 1][pos[1] + 1]?.color
		) {
			res.push([pos[0] + 1, pos[1] + 1]);
		}
		if (
			board[pos[0] + 1][pos[1] - 1]?.name !== '' &&
			board[pos[0]][pos[1]]?.color !==
				board[pos[0] + 1][pos[1] - 1]?.color
		) {
			res.push([pos[0] + 1, pos[1] - 1]);
		}
	}
	return res;
}
