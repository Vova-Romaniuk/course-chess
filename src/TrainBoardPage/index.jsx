import React, { useEffect, useState } from 'react';
import './Lesson1Page.scss';
import FullBoard from '../Components/BoardTraining/FullBoard';
import { useSelector, useDispatch } from 'react-redux';
import {
	historySelector,
	counterArraySelector,
	counterSelector,
} from '../app/slices/historySlice';

function TrainBoardPage() {
	const historySteps = useSelector(historySelector);
	const letterNameFigure = (obj) => {
		switch (obj.prevName) {
			case 'pawn':
				return bit(obj) === 'x' ? `${obj.prev.slice(0, -1)}` : '';
			case 'knight':
				return 'N';
			case 'bishop':
				return 'B';
			case 'king':
				return getStepRockerOrOnlyKing(obj);
			case 'queen':
				return 'Q';
			case 'rook':
				return 'R';
			default:
				return '';
		}
	};
	const getStepRockerOrOnlyKing = (obj) => {
		if (obj.prevName === "king" && obj.nextName === "rook" && obj.prevColor === obj.nextColor) {
			if (obj.prev.includes("c")) {
				return "O-O-O"
			}
			if (obj.prev.includes("g")) {
				return "O-O"
			}
		} else return "K"

	}
	const bit = (obj) => {
		return obj.prevColor !== obj.nextColor && obj.nextColor !== ''
			? 'x'
			: '';
	};
	const checkBitPawn = (obj) => { };
	return (
		<div className="lesson1">
			<div className="line-steps">
				<div className="history">
					{historySteps?.map((elem, index) =>
						elem.prevColor === 'white' ? (
							<span key={index}>
								{' '}
								<span className="number-step">
									{Math.round(index / 2) + 1 + '.'}
								</span>{' '}
								{'  ' + letterNameFigure(elem) + bit(elem) + (letterNameFigure(elem).includes("O") ? "" : elem.next) + '  '}
							</span>
						) : elem.prevColor === 'black' ? (
							<span key={index}>
								{' '}
								{letterNameFigure(elem) + bit(elem) + (letterNameFigure(elem).includes("O") ? "" : elem.next) + '  '}
							</span>
						) : null
					)}
				</div>
			</div>
			<div className="board-wrapp">
				<FullBoard />
			</div>
		</div>
	);
}
export default TrainBoardPage;
//setHistorySteps = {setHistorySteps}
