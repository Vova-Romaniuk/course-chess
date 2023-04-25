import React, { useEffect, useState } from "react";
import { LETTERS, NUMBERS } from '../../constants/constants';
import defaultData from "../../datas/defaultData";
import { selectFigure } from "../../figuresSteps/selectFigure";

export function BoardTask({ board,
	setCheckObj,
	step,
	prev,
	setLimit,
	limit,
	disabled,
	hint,
	stepFig,
	notification
}) {
	useEffect(() => {
		console.log(stepFig)
	}, [stepFig])
	const boxColor = (indexRow, indexColumn) => {
		let result = 'box';
		hint?.forEach((element) => {
			if (element[0] === indexRow && element[1] === indexColumn) {
				result = 'box hint-box';
			}
		})
		limit?.forEach((element) => {
			if (element[0] === indexRow && element[1] === indexColumn) {
				result = 'box possible-step';
				if (hint?.length !== 0) {
					hint.forEach((item) => {
						if (element[0] === item[0] && element[1] === item[1]) {
							result = 'box possible-step hint-box';
						}
					})
				}
			}

		});
		if (indexRow === prev[0] && indexColumn === prev[1]) {
			result = "box active"
		}
		stepFig?.forEach((element) => {
			if (element[0] === indexRow && element[1] === indexColumn) {

				if (notification.responce === "error") {
					result = 'box active-error';
				} else result = 'box active';
			}
		})

		return result;
	};

	return (
		<div className='board'>
			{board?.map((rows, indexRow) => (
				<div className='rows' key={indexRow}>
					{rows?.map((column, indexColumn) => (
						<div className='column' key={indexColumn}>
							<button
								className={boxColor(indexRow, indexColumn)}
								disabled={disabled}
								onClick={() => {
									setCheckObj(column);
									step(column, board, prev);
									setLimit(
										selectFigure(
											column,
											board,
											prev,
										)
									);
								}}
							>
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
		</div>
	)
}