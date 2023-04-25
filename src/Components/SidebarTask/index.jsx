import React, { useEffect, useState, useRef } from "react"
import { Notification } from "../NotificationTask"
import "./SidebarTask.scss"
import { Link } from "react-router-dom";
export function SidebarTask({ text, click, notification, setFeedback, figProp, figure }) {
	const [notifications, setNotifications] = useState([]);
	const scrollDown = useRef(null);

	useEffect(() => {
		Object.keys(notification).length > 0 && setNotifications([...notifications, notification])
	}, [notification])
	useEffect(() => {
		setNotifications([])
	}, [figProp?.number])
	useEffect(() => {
		scrollDown.current?.scrollIntoView({ behavior: 'smooth' })
	}, [notifications])

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

	return (
		<div className="sidebar-task">
			<div className="title">
				<div className="back-lesson">
					<Link to={`/lesson/${figure}`}>
						<i className="fa-solid fa-arrow-left"></i>
					</Link>
				</div>
				<span>{getUaName(figure)}</span>
				<div className="dones">
					<i class="fa-sharp fa-regular fa-badge-check"></i>
					<span>{figProp?.number + 1}/5</span>
				</div>
			</div>
			<hr />
			<div className="conversation scroll-none">
				<div className="condition">
					<div className="title-condition">
						<div className="block-color"></div>
						<span>Хід білих</span>
					</div>
					<div className="text-condition">
						<span>{text}</span>
					</div>
				</div>
				<div className="messages ">
					{
						notifications?.map((el, index) => (
							<Notification notification={el} key={index} />
						))
					}
					<div ref={scrollDown}></div>
				</div>
			</div>
			{notification.responce === "" &&
				<div className="buttons-hint">
					<button className="success" onClick={() => { setFeedback('hint'); click() }}>
						Підказка
					</button>
				</div>
			}
			{notification.responce === "hint" &&
				<div className="buttons-hint">
					<button className="default-btn" onClick={() => setFeedback('solution')}>
						Розвязок
					</button>
				</div>
			}
			{notification.responce === "success" && figProp.number + 1 < 5 &&
				<div className="buttons-success">
					<button className="success" onClick={() => { setFeedback('success'); click() }}>Наступнe завдання</button>
				</div>
			}
			{notification.responce === "success" && figProp.number + 1 === 5 && figProp.passed &&
				<div className="completed">
					<p>Вітаю ви завершили всі завдання!</p>
					<button onClick={click}>Розпочати заново</button>
				</div>
			}
			{
				notification.responce === "error" &&
				<div className="buttons-error">
					<button onClick={() => setFeedback('solution')} className="default-btn">
						Розв'язок
					</button>
					<button onClick={() => { setFeedback('error'); click() }} className="error-btn">
						Спробувати щераз
					</button>
				</div>
			}
		</div>
	)
}