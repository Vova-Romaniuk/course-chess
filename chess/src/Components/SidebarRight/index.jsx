import React, { useRef, useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import ScrollableFeed from 'react-scrollable-feed';
import "./style.scss"

export default function SidebarRight({ title, description, icon, textLesson, isType }) {
	const textRef = useRef(null)
	const scrollRef = useRef(null);

	useEffect(() => {
		const divElement = scrollRef.current;

		if (divElement) {
			divElement.scrollTop = divElement.scrollHeight;
		}

	}, [scrollRef.current?.scrollHeight]);

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
					<div className="text-lesson scroll-none" ref={scrollRef} >
						<TypeAnimation
							sequence={[textLesson, 5000]}
							speed={50}
							wrapper="div"
							cursor={false}
							style={{ fontSize: '18px' }}
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