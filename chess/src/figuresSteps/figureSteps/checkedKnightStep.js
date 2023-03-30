import { findPosition } from "../helpers";

export function checkedKnightStep(obj, board, prev, isBool) {
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
		if(!isBool){
			if (board[pos[0]][pos[1]].color === board[element[0]][element[1]].color){
				let index = res.indexOf(element);
				res.splice(index, 1);
			}	
		}
	});
	return res;
}