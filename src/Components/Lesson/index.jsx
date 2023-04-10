import React, { useEffect, useState } from "react"
import "./style.scss"
import useSound from "use-sound"
import BoardLesson from "../BoardForDemonstrationFigureStep/BoardLesson"
import defaultData from "../../datas/defaultData"
import { checkKingsNotMeets } from "../../figuresSteps/checkKingAroundShah"
import { figureLessons } from "../../datas/lessonsCases"
import { selectFigure } from "../../figuresSteps/selectFigure"
import SidebarRight from "../SidebarRight"
import { useParams } from "react-router"
import sounds from "../../assets/sounds/index"
export function Lesson({ }) {
	const { figure } = useParams()
	const [board, setBoard] = useState(defaultData);
	const [lessonFig, setLessonFig] = useState(figureLessons(figure));
	const [iter, setIter] = useState(0);
	const [iterLight, setIterLight] = useState(0);
	const [checkKingCantStep, setCheckKingCantStep] = useState([]);
	const [light, setLight] = useState([]);
	const [intervalId, setIntervalId] = useState(null)
	const [intervalIdLight, setIntervalIdLight] = useState(null)
	const [startLoop, setStartLoop] = useState(false)
	const [start, setStart] = useState(false);
	const [limit, setLimit] = useState([]);
	const [play] = useSound(sounds["king"]);

	useEffect(() => { }, [])
	useEffect(() => {
		setBoard([...defaultData])
		setIter(0);
		setStart(false)
		setLessonFig(figureLessons(figure))
	}, [figure])

	useEffect(() => {
		if (figure !=="game-goal") {
			board[lessonFig.firstPosition[0]][lessonFig.firstPosition[1]].name = lessonFig.name;
			board[lessonFig.firstPosition[0]][lessonFig.firstPosition[1]].icon = lessonFig.icon;
			board[lessonFig.firstPosition[0]][lessonFig.firstPosition[1]].color = 'white';
			setBoard([...board]);
			setLimit(selectFigure(board[lessonFig.firstPosition[0]][lessonFig.firstPosition[1]], board, lessonFig.firstPosition));
		} else {
			setBoard([...board]);
		}

	}, [lessonFig]);

	useEffect(() => {
		if (figure !=="game-goal") {
			if (iter > 0) {
				setCheckKingCantStep(checkKingsNotMeets(board, lessonFig.lesson[iter - 1].currentFig.position))
			}
		} else setLight(lessonFig.fieldLighted[iter])

	}, [iter])

	useEffect(() => {
		if (start) {
			loop()
		}

	}, [intervalId])
	const handleStep = (i) => {
		let otherFigLength = lessonFig.lesson[i].otherFig.position.length;
		let currentFig = lessonFig.lesson[i].currentFig;
		let otherFig = lessonFig.lesson[i].otherFig;
		let prevCurrentFig = lessonFig.lesson[i - 1]?.currentFig
		if (i === 0 && otherFigLength === 0) {
			setBoard((prevBoard) => {
				const boardCopy = prevBoard.map((row) => row.slice());

				boardCopy[currentFig.position[0]][currentFig.position[1]] = {
					...boardCopy[currentFig.position[0]][currentFig.position[1]],
					name: currentFig.name,
					icon: currentFig.icon,
					color: currentFig.color,
				};
				boardCopy[lessonFig.firstPosition[0]][lessonFig.firstPosition[1]] = {
					...boardCopy[lessonFig.firstPosition[0]][lessonFig.firstPosition[1]],
					name: "",
					icon: "",
					color: "",
				};
				setLimit(selectFigure(boardCopy[currentFig.position[0]][currentFig.position[1]], boardCopy, [currentFig.position[0], currentFig.position[1]]));
				return boardCopy;
			});
		}
		if (i === 0 && otherFigLength !==0) {
			setBoard((prevBoard) => {
				const boardCopy = prevBoard.map((row) => row.slice());

				boardCopy[otherFig.position[0]][otherFig.position[1]] = {
					...boardCopy[otherFig.position[0]][otherFig.position[1]],
					name: otherFig.name,
					icon: otherFig.icon,
					color: otherFig.color,
				};
				boardCopy[currentFig.position[0]][currentFig.position[1]] = {
					...boardCopy[currentFig.position[0]][currentFig.position[1]],
					name: currentFig.name,
					icon: currentFig.icon,
					color: currentFig.color,
				};
				boardCopy[lessonFig.firstPosition[0]][lessonFig.firstPosition[1]] = {
					...boardCopy[lessonFig.firstPosition[0]][lessonFig.firstPosition[1]],
					name: "",
					icon: "",
					color: "",
				};
				setLimit(selectFigure(boardCopy[currentFig.position[0]][currentFig.position[1]], boardCopy, [currentFig.position[0], currentFig.position[1]]));
				return boardCopy;
			});
		}
		if (i > 0 && otherFigLength === 0) {
			setBoard((prevBoard) => {
				const boardCopy = prevBoard.map((row) => row.slice());
				boardCopy[currentFig.position[0]][currentFig.position[1]] = {
					...boardCopy[currentFig.position[0]][currentFig.position[1]],
					name: currentFig.name,
					icon: currentFig.icon,
					color: currentFig.color,
				};
				boardCopy[prevCurrentFig.position[0]][prevCurrentFig.position[1]] = {
					...boardCopy[prevCurrentFig.position[0]][prevCurrentFig.position[1]],
					name: "",
					icon: "",
					color: "",
				};
				setLimit(selectFigure(boardCopy[currentFig.position[0]][currentFig.position[1]], boardCopy, [currentFig.position[0], currentFig.position[1]]));
				return boardCopy;
			});
		}
		if (i > 0 && otherFigLength !== 0) {
			setBoard((prevBoard) => {
				const boardCopy = prevBoard.map((row) => row.slice());
				boardCopy[otherFig.position[0]][otherFig.position[1]] = {
					...boardCopy[otherFig.position[0]][otherFig.position[1]],
					name: otherFig.name,
					icon: otherFig.icon,
					color: otherFig.color,
				};
				boardCopy[currentFig.position[0]][currentFig.position[1]] = {
					...boardCopy[currentFig.position[0]][currentFig.position[1]],
					name: currentFig.name,
					icon: currentFig.icon,
					color: currentFig.color,
				};
				boardCopy[prevCurrentFig.position[0]][prevCurrentFig.position[1]] = {
					...boardCopy[prevCurrentFig.position[0]][prevCurrentFig.position[1]],
					name: "",
					icon: "",
					color: "",
				};
				setLimit(selectFigure(boardCopy[currentFig.position[0]][currentFig.position[1]], boardCopy, [currentFig.position[0], currentFig.position[1]]));
				return boardCopy;
			});
		}
	}
	const stepGameGoal = (i) => {
		if (i >= 6) {
			setBoard((prevBoard) => {
				let boardCopy = defaultData.map((row) => row.slice());

				lessonFig.lesson[i].map((item) => {
					boardCopy[item.position[0]][item.position[1]] = {
						...boardCopy[item.position[0]][item.position[0]],
						name: item.name,
						icon: item.icon,
						color: item.color,
					};
				})
				return boardCopy;
			})
		} else {
			setBoard((prevBoard) => {
				const boardCopy = prevBoard.map((row) => row.slice());
				lessonFig.lesson[i].map((item) => {
					boardCopy[item.position[0]][item.position[1]] = {
						...boardCopy[item.position[0]][item.position[0]],
						name: item.name,
						icon: item.icon,
						color: item.color,
					};
				})
				return boardCopy;
			})
		}

	}
	const handleClick = () => {
		loop();
		if (figure.name === "game-goal") {
			loopLight()
		}
		// play()
	}

	function loopLight() {
		const id = setTimeout(() => {
			setIterLight(iterLight => {
				if (iterLight === lessonFig.times.length) {
					clearTimeout(intervalIdLight)
					setIntervalIdLight(null)
					return iterLight;
				} else {
					setIntervalIdLight(id);
					setLight(lessonFig.fieldLighted[iterLight]);
					return iterLight + 1;
				}

			})
		}, lessonFig.timesLight[iterLight])
	}

	function loop() {
		const id = setTimeout(() => {
			setIter(iter => {
				if (iter === lessonFig.times.length) {
					clearTimeout(intervalId)
					setIntervalId(null)
					return iter;
				} else {
					setIntervalId(id);

					if (figure !=="game-goal") {
						handleStep(iter);
					}
					if (figure === "game-goal") stepGameGoal(iter);

					return iter + 1;
				}

			})
		}, lessonFig.times[iter])
	}
	return <div className="lesson">
		<div className="board-lesson">
			<BoardLesson
				limit={limit}
				board={board}
				handleLoop={handleClick}
				setIsStart={setStart}
				checkKingCantStep={checkKingCantStep}
				iter={iter}
				lightArr={light}
			/>
		</div>
		<div className="sidebar-lesson">
			<SidebarRight
				title={lessonFig.title}
				description={lessonFig.description}
				icon={lessonFig.icon}
				textLesson={lessonFig.textLesson}
				isType={start}
			/>
		</div>
	</div>
} 