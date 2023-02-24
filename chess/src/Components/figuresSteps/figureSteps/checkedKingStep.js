import { findPosition } from "../helpers";
import { 
	findRooksUnion,
	isEmptycheckKingBetweenRook,
	checkRocker
 } from "../rocker/checkRocker";
 
export function checkedKingStep(obj, board, prev, overlaps = []) {
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
	// console.log("res1", res);
	// console.log("overlaps", overlaps);
	// console.log("arr", arr);
	arr?.map((element) => {
	  overlaps[0]?.forEach((el) => {
		if (element[0] === el[0] && element[1] === el[1]) {
		  let index = res.indexOf(element);
		  res.splice(index, 1);
		}
	  });
	});
	//console.log("res2",res)
	return res;
  }