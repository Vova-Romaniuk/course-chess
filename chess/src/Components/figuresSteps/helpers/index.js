
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

export const findPositionForShah = (obj, board) => {
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
export const isContains = (availableStep, pos) => {
	let bool = false;
	availableStep.forEach((el1) => {
		if (el1[0] == pos[0] && el1[1] == pos[1]) {
			bool = true;
		}
	});
	return bool;
};

