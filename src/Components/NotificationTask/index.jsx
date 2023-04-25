/* eslint-disable no-fallthrough */
import React, { useState, useEffect } from "react";
import "./Notification.scss"

export function Notification({ notification }) {
	const [educt, setEduct] = useState({});
	useEffect(() => {
		eductTitle();
	}, [notification])

	const eductTitle = () => {
		switch (notification.responce) {
			case "success":
				setEduct({
					...educt,
					iClassName: "fa-duotone fa-check",
					titleText: `${notification.figureId} є правильним`,
					color: "success",
					messageText: "Чудово! Ти зробив це. Молодець!"
				})
				break;
			case "hint":
				setEduct({
					...educt,
					iClassName: "fa-solid fa-lightbulb-on",
					titleText: `${notification.figureId}`,
					color: "hint",
					messageText: "Зараз ви отримали підказку. Спробуйте виконати завдання."
				})
				break;
			case "error":
				setEduct({
					...educt,
					iClassName: "fa-solid fa-rotate-left",
					titleText: `${notification.figureId} є неправильний`,
					color: "error",
					messageText: "Нажаль. Цей хід є хибним."
				})
				break;
			default:
				setEduct({
					...educt,
					iClassName: "",
					titleText: "",
					color: "",
					messageText: ""
				})
				break;
		}
	}
	return (
		Object.keys(notification).length > 0 && notification.responce !== "" &&
		<div className="notification">
			<div className={`title ${educt.color}`}>
				<i className={educt.iClassName}></i>
				<span>{educt.titleText}</span>
			</div>
			<div className="text">
				<span>{educt.messageText}</span>
			</div>
		</div>

	);
}