import React, { useState, useEffect } from 'react';
import './BoardLesson.scss';
import { LETTERS, NUMBERS } from '../../constants/constants';

function BoardLesson({
	limit,
	board,
	handleLoop,
	setIsStart,
	checkKingCantStep,
	lightArr,
}) {
	const [start, setStart] = useState(false);

	const notIntersection = (curentAvailable, availableStep) => {
		let res = [];
		curentAvailable?.forEach((el1) => {
			availableStep?.forEach((el2) => {
				if (el1[0] !== el2[0] && el1[1] !== el2[1]) {
					res.push(el1);
				}
			});
		});

		return res;
	};
	const boxColor = (indexRow, indexColumn) => {
		let result = 'box';
		if (start) {
			let possibleStep =
				checkKingCantStep.length > 0
					? notIntersection(limit, checkKingCantStep)
					: limit;
			possibleStep?.forEach((element) => {
				if (element[0] == indexRow && element[1] == indexColumn) {
					result = 'box possible-step';
				}
			});
			lightArr?.forEach((el) => {
				if (el[0] == indexRow && el[1] == indexColumn) {
					result = 'box light';
				}
			});
		}
		return result;
	};
	const handleClick = () => {
		handleLoop();
		setIsStart(true);
		setStart(true);
	};
	return (
		<div className='board'>
			{board?.map((rows, indexRow) => (
				<div className='rows' key={indexRow}>
					{rows?.map((column, indexColumn) => (
						<div className='column' key={indexColumn}>
							<button className={boxColor(indexRow, indexColumn)}>
								{column.icon === '' ? (
									<></>
								) : (
									<img src={column.icon} />
								)}
								{indexColumn === 0 ? (
									<span className='numbers'>
										{NUMBERS[indexRow]}
									</span>
								) : (
									<span></span>
								)}
								{indexRow === 7 ? (
									<span className='letters'>
										{LETTERS[indexColumn]}
									</span>
								) : (
									<span></span>
								)}
							</button>
						</div>
					))}
				</div>
			))}
			{!start && (
				<div className='play' onClick={handleClick}>
					<div className='circle'>
						<i className='fa-solid fa-play'></i>
					</div>
				</div>
			)}
		</div>
	);
}
export default BoardLesson;
