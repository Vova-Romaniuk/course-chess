import React, { useRef, useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import "./style.scss"

export default function SidebarRight({ title, description, icon, textLesson, isType }) {
	const [text, setText] = useState('');

	const handleTextChange = event => {
		setText(event.target.value);
	};
	const textAreaRef = useRef(null);
	const resizeTextArea = () => {
		console.log("work")
		textAreaRef.current.style.height = "20px";
		textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
	};
	const noop = (e) => {
		e.preventDefault();
		return false;
	}
	return (
		<div className="right-sidebar ">
			<div className="title">
				<div className="image">
					<img src={icon} alt="" />
				</div>
				<h1>{title}</h1>
			</div>
			<hr />
			<div className="text">
				<span>{description}</span>
			</div>
			{
				isType &&
				(
					<div
						className="text-lesson scroll-none"
						ref={textAreaRef}
						contentEditable={false}
						readOnly
					// onInput={resizeTextArea}
					// readOnly
					// contentEditable
					// onCut={noop}
					// onCopy={noop}
					// onPaste={noop}
					// onKeyDown={noop}
					>
						<TypeAnimation
							sequence={[
								`${textLesson}`,
								5000
							]}
							speed={200}
							wrapper="span"
							cursor={false}
							style={{ fontSize: '18px', display: 'inline-block' }}
						/>
					</div>
				)
			}
			<div className="link-lesson">
				<button>
					Перейти до завдань
				</button>
			</div>
		</div>
	);
}