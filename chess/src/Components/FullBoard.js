import React, { useEffect, useState } from 'react';
import './FullBoard.scss';
import data from './datas/Data';
import useSound from 'use-sound';
import soundStep from '../../src/sounds/step.mp3';
import { selectFigure } from './figuresSteps/selectFigure';
import { 
	checkKingAroundAndEnemyFigures,
	checkKingCantStep,
	checkUnionOverlaps,
	checkedShah
 } 
	from './figuresSteps/checkKingAroundShah';

import { changeVisibility } from "./slices/modalSlices"
import { visibilitySelector } from './slices/modalSlices';
import { findPosition } from './figuresSteps/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { changeHistoryAction, arrayCounter, increment } from './slices/historySlice';
import PopupResult from "./PopupResult"
function FullBoard() {
	const [play] = useSound(soundStep);
	const [board, setBoard] = useState(data);
	const [active, setActive] = useState(false);
	const [checkObj, setCheckObj] = useState({});
	const [limit, setLimit] = useState([]);
	const [limitStep, setLimitStep] = useState([]);
    const [counter, setCounter] = useState(1)
    const [posKing, setPosKing] = useState([])
	const [posUnionKing, setUnionPosKing] = useState([])
	const [unionOverlaps, setUnionOverlaps] = useState([])
	const [checkKingAround, setCheckKingAround] = useState([])
	const [posFigureGaveShah, setPosFigureGaveShah] = useState([])
	const [stepsKing, setStepsKing] = useState([])
	const [checkAllUnionOverplaps,setCheckAllUnionOverlaps] = useState([])
	const [prev, setPrev] = useState([]);
    const [kingCantStep, setKingCantStep] = useState([])
	const [turn, setTurn] = useState(true);
	const [next, setNext] = useState([]);
	const [mat,setMat] = useState(false);
	const [pat,setPat] = useState(false);
	const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	const numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];
	const visibilityModal = useSelector(visibilitySelector)
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	console.log(posKing)
	// }, [posKing]);

	// useEffect(() => 	{
	// 	console.log(limitStep)	
	// },[limitStep]);

	// useEffect(() => {
	// 	console.log(prev)	
	// },[prev]);

	// useEffect(() =>{
	// 	console.log("unionOverlaps",unionOverlaps)
	// },[unionOverlaps])
	// useEffect(() =>{
	// 	console.log("unionOverlaps",checkAllUnionOverplaps)
	// },[checkAllUnionOverplaps])
	useEffect(() =>{
		console.log(kingCantStep)
	},[kingCantStep])
	useEffect(() =>{
		console.log(posFigureGaveShah)
	}, [posFigureGaveShah])
	useEffect(() => {
		
		replace();
		
		setLimitStep(selectFigure(checkObj, board, prev,unionOverlaps));
	}, [next]);

	
	useEffect(() => {
		setTurn(!turn);
        findPosKing();
		findPosUnionKing();
		setPrev([]);
		setNext([]);
		setLimitStep(selectFigure(checkObj, board, prev,unionOverlaps));
		//checkMat()
	}, [board]);

	const rocker = (arrRockerSteps = []) => {
			
		if(arrRockerSteps.length != 0){
			//king
			board[arrRockerSteps[0]][arrRockerSteps[1]].name = board[posUnionKing[0]][posUnionKing[1]].name;
			board[arrRockerSteps[0]][arrRockerSteps[1]].icon = board[posUnionKing[0]][posUnionKing[1]].icon;
			board[arrRockerSteps[0]][arrRockerSteps[1]].color = board[posUnionKing[0]][posUnionKing[1]].color;
			board[arrRockerSteps[0]][arrRockerSteps[1]].checked = true;

			board[posUnionKing[0]][posUnionKing[1]].name = "";
			board[posUnionKing[0]][posUnionKing[1]].icon = "" ;
 			board[posUnionKing[0]][posUnionKing[1]].color = "" ;
			//rook
			board[arrRockerSteps[2]][arrRockerSteps[3]].name = board[arrRockerSteps[4]][arrRockerSteps[5]].name;
			board[arrRockerSteps[2]][arrRockerSteps[3]].icon = board[arrRockerSteps[4]][arrRockerSteps[5]].icon;
			board[arrRockerSteps[2]][arrRockerSteps[3]].color = board[arrRockerSteps[4]][arrRockerSteps[5]].color;
			board[arrRockerSteps[2]][arrRockerSteps[3]].checked = true;

			board[arrRockerSteps[4]][arrRockerSteps[5]].name = "";
			board[arrRockerSteps[4]][arrRockerSteps[5]].icon = "";
 			board[arrRockerSteps[4]][arrRockerSteps[5]].color = "";

		 	setBoard([...board]);
			setActive(false);
		 	play();
		 	setLimit([]);
		}
		

	}
	const checkMat = () =>{
		
		if(unionOverlaps.length != 0 && checkAllUnionOverplaps.length == 0){
			dispatch(changeVisibility())
		}
	}
    const findPosUnionKing =() =>{
		board.forEach((row, indexRow) => {
            row.forEach((column, indexColumn) =>{
                if(turn){
                    if(column.name === "king" && column.color === "white"){
                        setUnionPosKing([indexRow,indexColumn])
                    } 
                } else{
                    if(column.name === "king" && column.color === "black"){
                        setUnionPosKing([indexRow,indexColumn])
                    } 
                }
            })
        })
	}

    const findPosKing = () =>{
	
        board.forEach((row, indexRow) => {
            row.forEach((column, indexColumn) =>{
                if(turn){
                    if(column.name === "king" && column.color === "black"){
                        setPosKing([indexRow,indexColumn])
						
                    } 
                } else{
                    if(column.name === "king" && column.color === "white"){
                        setPosKing([indexRow,indexColumn])
						
                    } 
                }
            })
        })
    }
    
	

	const step = (obj, board, prev) => {
		if (prev.length === 0) {
			setPrev(findPosition(obj, board, prev));
			setLimitStep(selectFigure(obj, board, prev,unionOverlaps));
		}
		if (prev.length != 0) {
			setNext(findPosition(obj, board, prev,posKing));
			setActive(true);
		}
	};
	const replace = () => {
		if (active) {
			if (
				JSON.stringify(prev) === JSON.stringify(next) ||
				board[prev[0]][prev[1]].color ===
					board[next[0]][next[1]].color ||
				board[prev[0]][prev[1]].color != board[next[0]][next[1]].color
			) {
				
				setPrev(next);
				setLimitStep(selectFigure(checkObj, board, prev,unionOverlaps));
				setNext([]);
				setActive(false);
			}
			if (JSON.stringify(prev) != JSON.stringify(next)) {
				limitStep?.forEach((element) => {
					if(element[0] === next[0] && element[1] === next[1] && element.length > 2){
						rocker(element);
					} 
					else if (JSON.stringify(element) === JSON.stringify(next)) {
                    
						dispatch(
							changeHistoryAction(
                                    {
                                        prev: board[prev[0]][prev[1]].id,
                                        next: board[next[0]][next[1]].id,
                                        name: board[prev[0]][prev[1]].name,
                                        prevColor: board[prev[0]][prev[1]].color,
                                        nextColor: board[next[0]][next[1]].color
                                    })
						) 
                        setCounter(counter+1)
                       if( !turn)  dispatch(arrayCounter())
						
						board[next[0]][next[1]].name =
							board[prev[0]][prev[1]].name;
						board[next[0]][next[1]].icon =
							board[prev[0]][prev[1]].icon;
						board[next[0]][next[1]].color =
							board[prev[0]][prev[1]].color;
						board[next[0]][next[1]].checked = true;
						
						if(board[prev[0]][prev[1]].name === "king"){
							console.log(limitStep)
						}
						if(board[prev[0]][prev[1]].name === "king" && next.length === 0) {
							
							checkUnionOverlaps(unionOverlaps,board, prev,posKing)
							setCheckAllUnionOverlaps(setUnionOverlaps(unionOverlaps))
							setPosFigureGaveShah([...posFigureGaveShah])
						} else { 
							setPosFigureGaveShah([...next])
						 	setCheckAllUnionOverlaps(checkUnionOverlaps(checkedShah(board[next[0]][next[1]], board, prev,posKing),board,prev,posKing))
							setUnionOverlaps(checkedShah(board[next[0]][next[1]], board, prev,posKing));
						}
						
						board[prev[0]][prev[1]].name = '';
						board[prev[0]][prev[1]].icon = '';
						board[prev[0]][prev[1]].color = '';
						setBoard([...board]);
						setActive(false);
						play();
						setLimit([]);
					} else {
						
						setLimitStep(selectFigure(checkObj, board, prev,unionOverlaps));
						setNext([]);
						setActive(false);
					}
				});
			}
		}
	};

	const selectTurn = (obj, indexColumn, indexRow) => {
		let bool = false;
       
		if (turn && obj.color === 'white') {
			bool = true;
		} else if (!turn && obj.color === 'black') {
			bool = true;
		} else bool = false

       
		limitStep.forEach((el) => {
			if (
				el[0] === indexRow &&
				el[1] === indexColumn && 
				board[indexRow][indexColumn] != ''
			) {
				bool = false;
			}
		});
        
		if(posKing[0] === indexRow && posKing[1] === indexColumn){
			bool = true;
		}

	
			kingCantStep.forEach(el =>{
		
				if(el[0] === indexRow && el[1] === indexColumn ){
					bool = true;
				}
			})
		
		if(checkKingAround.length != 0){
			if(obj.name === ''){
				bool = true
			}
			limitStep.forEach((el) => {
				if (
					el[0] === indexRow &&
					el[1] === indexColumn  && 
					board[indexRow][indexColumn] != ''
				) {
					bool = true;
				}
			});
			
			checkKingAround.forEach((el)=>{
				if(el[0] === indexRow && el[1] === indexColumn ){
					bool = false;
				}
				
			})
			
			if(posKing[0] === indexRow && posKing[1] === indexColumn){
				bool = true;
			}
		}
		
		if(unionOverlaps.length != 0){
			if(obj.name === ''){
				bool = true
			}
			limitStep.forEach((el) => {
				if (
					el[0] === indexRow &&
					el[1] === indexColumn && 
					board[indexRow][indexColumn] != ''
				) {
					bool = true;
				}
			});
			
			for (let i = 0; i < unionOverlaps.length; i++) {
				if((unionOverlaps[i][0] === indexRow && unionOverlaps[i][1] === indexColumn)   )	{
					bool = false;
				}
			}
			
				kingCantStep.forEach(el =>{			
					if(el[0] === indexRow && el[1] === indexColumn ){
						bool = true;
					}else bool = false
				})	
				if(posUnionKing[0] === indexRow && posUnionKing[1] === indexColumn){
					bool = false
				}
				if(posKing[0] === indexRow && posKing[1] === indexColumn){
					bool = true;
				}
				
		}
			
		// if( posFigureGaveShah[0] == indexRow && posFigureGaveShah[1] == indexColumn){
		// 	bool = true
		// }
		
		return bool;
	};

	const boxColor = (column, checkObj, indexRow, indexColumn) => {
		let result = 'box';
		limit?.forEach((element) => {
			if (element[0] == indexRow && element[1] == indexColumn && !selectTurn(column,indexColumn,indexRow)) {
				result = 'box possible-step';
			}
		});
		if (indexRow === next[0] && indexColumn === next[1]) {
			return result;
		}
		if (checkObj.id === column.id) result = 'box active';

		return result;
	};
    
	return (
		<div className="board">
			{
				visibilityModal && <PopupResult/>
			
			}
			{board?.map((rows, indexRow) => (
				<div className="rows" key={indexRow}>
					{rows?.map((column, indexColumn) => (
						<div className="column" key={indexColumn}>
							<button
								className={boxColor(
									column,
									checkObj,
									indexRow,
									indexColumn
								)}
								disabled={selectTurn(
                                    column,
                                    indexColumn,
                                    indexRow
                                )}
								onClick={() => {
									step(column, board, prev);
									
									setLimit(selectFigure(column, board, prev,unionOverlaps));
									column.name === "king" ? setKingCantStep(checkKingCantStep(column, board, prev, posFigureGaveShah)) : setKingCantStep([])
									setCheckKingAround(checkKingAroundAndEnemyFigures(column, board, prev))
									
									setCheckObj(column);
								}}
								key={indexColumn}>
								{column.icon === '' ? (
									<></>
								) : (
									<img src={column.icon} />
								)}

								{indexColumn === 0 ? (
									<span className="numbers">
										{numbers[indexRow]}
									</span>
								) : (
									<span></span>
								)}
								{indexRow === 7 ? (
									<span className="letters">
										{letters[indexColumn]}
									</span>
								) : (
									<span></span>
								)}
							</button>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
export default FullBoard;
