import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BoardTask } from "../BoardTask";
import { SidebarTask } from "../SidebarTask";
import useSound from 'use-sound';
import defaultData from "../../datas/defaultData";
import { findPosition, isContains } from "../../figuresSteps/helpers"
import { selectFigure } from "../../figuresSteps/selectFigure";
import soundStep from "../../assets/sounds/step.mp3"
import { taskAllFigures } from "../../constants/constantsSetLS";

export function LessonTask() {
	const [play] = useSound(soundStep);
	const { figure } = useParams();
	const [taskProperties, setTaskProperties] = useState([]);
	const [board, setBoard] = useState(defaultData);
	const [prev, setPrev] = useState([]);
	const [next, setNext] = useState([]);
	const [limit, setLimit] = useState([])
	const [task, setTask] = useState({});
	const [limitStep, setLimitStep] = useState([])
	const [active, setActive] = useState(false)
	const [load, setLoad] = useState(false);
	const [indexObj, setIndexObj] = useState({});
	const [checkObj, setCheckObj] = useState({});
	const [hint, setHint] = useState([])
	const [index, setIndex] = useState(-1);
	const [stepFig, setStepFig] = useState([]);
	const [notification, setNotification] = useState({
		responce: "",
		figureId: ""
	});
	const [disabled, setDisabled] = useState(false);
	const [feedback, setFeedback] = useState("")
	useEffect(() => {
		const saveTask = JSON.parse(localStorage.getItem("task"));
		if (Object.keys(saveTask).length > 0) {
			setTask(saveTask)
		}
		setLoad(true);
		setTaskProperties(taskAllFigures[figure]);
		setIndexObj(taskAllFigures[figure][JSON.parse(localStorage.getItem("task"))[figure]])

	}, [])

	useEffect(() => {
		if (load) {
			localStorage.setItem("task", JSON.stringify(task))
			setIndexObj(taskProperties[task[figure].number])
		}
	}, [task])

	useEffect(() => {
		if (load) {

			if (feedback === "success") {

				if (task[figure].number <= 4) {
					setTask({
						...task, [figure]: {
							...task[figure],
							number: task[figure].number + 1,
							passed: false
						}
					})
				}
				setFeedback("")
				setDisabled(false)
				setHint([])
			}
			if (feedback === "error") {
				setDisabled(false);
				setStepFig([])
				setBoard((prevBoard) => {
					prevBoard.map((row) => row.slice());
					prevBoard.map((row, indexRow) => {
						row.map((col, indexCol) => {
							prevBoard[indexRow][indexCol] = {
								...prevBoard[indexRow][indexCol],
								name: "",
								icon: "",
								color: "",
							};
						})
					})
					indexObj.figures.map((item) => {
						prevBoard[item.position[0]][item.position[1]] = {
							...prevBoard[item.position[0]][item.position[1]],
							name: item.name,
							icon: item.icon,
							color: item.color,
						};
					})
					return prevBoard;
				});
				setHint([])
				setFeedback("")
			}
			if (feedback === "hint") {
				setHint(indexObj.checkStep[0].positionCheck)
				setNotification({
					...notification,
					responce: "hint",
					figureId: `Цей хід має зробити ${getUaName(indexObj.checkStep[0]?.name)}`
				})
				setFeedback("")
				setStepFig([])
			}
			if (feedback === "solution") {
				setBoard((prevBoard) => {
					let boardCopy = prevBoard.map((row) => row.slice());
					boardCopy.map((row, indexRow) => {
						row.map((col, indexCol) => {
							boardCopy[indexRow][indexCol] = {
								...boardCopy[indexRow][indexCol],
								name: "",
								icon: "",
								color: "",
							};
						})
					})
					boardCopy[indexObj.checkStep[0].positionCheck[0][0]][indexObj.checkStep[0].positionCheck[0][1]] = {
						...boardCopy[indexObj.checkStep[0].positionCheck[0][0]][indexObj.checkStep[0].positionCheck[0][1]],
						name: indexObj.checkStep[0].name,
						icon: indexObj.checkStep[0].icon,
						color: "white",
					};
					indexObj.figures.map((item) => {
						boardCopy[item.position[0]][item.position[1]] = {
							...boardCopy[item.position[0]][item.position[1]],
							name: item.name,
							icon: item.icon,
							color: item.color,
						};
					})

					boardCopy[indexObj.firstSolutionPos[0]][indexObj.firstSolutionPos[1]] = {
						...boardCopy[indexObj.firstSolutionPos[0]][indexObj.firstSolutionPos[1]],
						name: "",
						icon: "",
						color: "",
					};
					setDisabled(true)
					setNotification({
						...notification,
						responce: "success",
						figureId: `${getUaName(indexObj.checkStep[0].name)} ${board[indexObj.checkStep[0].positionCheck[0][0]][indexObj.checkStep[0].positionCheck[0][1]].id}`
					})
					setHint([])
					setLimit([])
					setFeedback("")
					setStepFig([indexObj.checkStep[0].positionCheck[0], indexObj.firstSolutionPos])
					setTask({
						...task, [figure]: {
							...task[figure],
							passed: true,
						}
					})
					return boardCopy;
				});
			}
		}
	}, [feedback])

	useEffect(() => {
		if (load) {
			setBoard((prevBoard) => {
				let boardCopy = prevBoard.map((row) => row.slice());

				boardCopy.map((row, indexRow) => {
					row.map((col, indexCol) => {
						boardCopy[indexRow][indexCol] = {
							...boardCopy[indexRow][indexCol],
							name: "",
							icon: "",
							color: "",
						};
					})
				})
				indexObj?.figures.map((item) => {
					boardCopy[item.position[0]][item.position[1]] = {
						...boardCopy[item.position[0]][item.position[1]],
						name: item.name,
						icon: item.icon,
						color: item.color,
						checked: true
					};
				})
				return boardCopy;
			});

			if (task[figure].passed) {
				setBoard((prevBoard) => {
					let obj = taskProperties[task[figure].number];
					let boardCopy = prevBoard.map((row) => row.slice());
					boardCopy.map((row, indexRow) => {
						row.map((col, indexCol) => {
							boardCopy[indexRow][indexCol] = {
								...boardCopy[indexRow][indexCol],
								name: "",
								icon: "",
								color: "",
							};
						})
					})
					boardCopy[obj.checkStep[0].positionCheck[0][0]][obj.checkStep[0].positionCheck[0][1]] = {
						...boardCopy[obj.checkStep[0].positionCheck[0][0]][obj.checkStep[0].positionCheck[0][1]],
						name: obj.checkStep[0].name,
						icon: obj.checkStep[0].icon,
						color: "white",
					};
					obj.figures.map((item) => {
						boardCopy[item.position[0]][item.position[1]] = {
							...boardCopy[item.position[0]][item.position[1]],
							name: item.name,
							icon: item.icon,
							color: item.color,
						};
					})

					boardCopy[obj.firstSolutionPos[0]][obj.firstSolutionPos[1]] = {
						...boardCopy[obj.firstSolutionPos[0]][obj.firstSolutionPos[1]],
						name: "",
						icon: "",
						color: "",
					};
					setDisabled(true)

					setNotification({
						...notification,
						responce: "success",
						figureId: `${getUaName(obj.checkStep[0].name)} ${board[obj.checkStep[0].positionCheck[0][0]][obj.checkStep[0].positionCheck[0][1]].id}`
					})
					setHint([])
					setLimit([])
					setFeedback("")
					setStepFig([obj.checkStep[0].positionCheck[0], obj.firstSolutionPos])
					return boardCopy;
				});
			} else setStepFig([])
		}
	}, [indexObj])
	const getUaName = (name) => {
		switch (name) {
			case "knight":
				return "Кінь"
			case "king":
				return "Король"
			case "rook":
				return "Тура"
			case "bishop":
				return "Слон"
			case "pawn":
				return "Пішак"
			case "queen":
				return "Королева"
			default:
				return
		}
	}
	useEffect(() => {
		if (load) {
			setIndexObj(taskProperties[index])
		}
	}, [index])

	useEffect(() => {
		replace();
		setLimitStep(selectFigure(checkObj, board, prev));
		if (prev.length !== 0 &&
			next.length !== 0 &&
			(board[prev[0]][prev[1]].color !== "" && board[next[0]][next[1]].color == "") &&
			board[next[0]][next[1]].name !== "" && board[prev[0]][prev[1]].name !== ""

		) {
			setHint([]);
			setStepFig([prev, next]);
		}

	}, [next])

	useEffect(() => {
		console.log(stepFig)
	}, [stepFig])
	useEffect(() => {
		setPrev([]);
		setNext([]);
		setLimitStep(selectFigure(checkObj, board, prev));

	}, [board]);

	const checkStep = (board) => {

		if (board[next[0]][next[1]].name === indexObj.checkStep[0]?.name && isContains(indexObj.checkStep[0].positionCheck, next)) {
			setDisabled(true)
			setTask({
				...task, [figure]: {
					...task[figure],
					passed: true,
				}
			})
			setStepFig([prev, next])

			setNotification({
				...notification,
				responce: "success",
				figureId: `${getUaName(board[next[0]][next[1]].name)} ${board[next[0]][next[1]].id}`
			})
		} else {
			setDisabled(true)
			setStepFig([prev, next])
			setNotification({
				...notification,
				responce: "error",
				figureId: `${getUaName(board[next[0]][next[1]].name)} ${board[next[0]][next[1]].id}`
			})
		}

	}
	const step = (obj, board, prev) => {
		if (prev.length === 0) {
			setPrev(findPosition(obj, board, prev));
			setLimitStep(selectFigure(obj, board, prev, false));
		}
		if (prev.length !== 0) {
			setNext(findPosition(obj, board, prev));
			setActive(true)
		}
	};
	const resetToInitialData = () => {
		setTask({
			...task, [figure]: {
				...task[figure],
				number: 0,
				passed: false
			}
		})
		setDisabled(false)
	}
	const replace = () => {
		if (active) {
			if (
				JSON.stringify(prev) === JSON.stringify(next) ||
				board[prev[0]][prev[1]].color ===
				board[next[0]][next[1]].color ||
				board[prev[0]][prev[1]].color !== board[next[0]][next[1]].color
			) {
				setPrev(next);
				setLimitStep(
					selectFigure(checkObj, board, prev, false)
				);
				setNext([]);
				setActive(false);
			}
			if (JSON.stringify(prev) !== JSON.stringify(next) && next.length !== 0 && prev.length !== 0) {
				limitStep?.forEach((element) => {
					if (
						JSON.stringify(element) === JSON.stringify(next)
					) {

						board[next[0]][next[1]].name =
							board[prev[0]][prev[1]].name;
						board[next[0]][next[1]].icon =
							board[prev[0]][prev[1]].icon;
						board[next[0]][next[1]].color =
							board[prev[0]][prev[1]].color;
						board[next[0]][next[1]].checked = true;

						board[prev[0]][prev[1]].name = '';
						board[prev[0]][prev[1]].icon = '';
						board[prev[0]][prev[1]].color = '';
						checkStep(board)
						setBoard([...board]);
						setActive(false);
						play();
						setLimit([]);
					} else {
						setLimitStep(
							selectFigure(
								checkObj,
								board,
								prev,
								false,
							)
						);
						setNext([]);
						setActive(false);
					}
				});
			}
		}
	};

	const handleClick = () => {
		if (notification.responce === "success" && task[figure].number === 4) {
			resetToInitialData()
		}
		setNotification({
			...notification,
			responce: "",
			figureId: ""
		})
	}
	return (
		<div className="lesson task">
			<div className="board-lesson board-task">
				<BoardTask
					board={board}
					setCheckObj={setCheckObj}
					step={step}
					prev={prev}
					setLimit={setLimit}
					limit={limit}
					disabled={disabled}
					hint={hint}
					stepFig={stepFig}
					notification={notification}
				/>
			</div>
			<div className="sidebar-lesson sidebar-task">
				<SidebarTask
					text={load && indexObj?.conditionText}
					click={handleClick}
					notification={notification}
					setFeedback={setFeedback}
					figProp={task[figure]}
					figure={figure}
				/>
			</div>
		</div>
	)
}; 