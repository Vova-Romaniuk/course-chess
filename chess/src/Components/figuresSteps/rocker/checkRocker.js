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
