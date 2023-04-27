import React, { useRef, useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import ScrollableFeed from 'react-scrollable-feed';
import { Link } from "react-router-dom";
import "./style.scss"

export default function SidebarRight({ title, description, icon, textLesson, isType, pathName }) {
	const textRef = useRef(null)
	const scrollRef = useRef(null);

	useEffect(() => {
		const divElement = scrollRef.current;
		if (divElement) {

			divElement.scrollTop = divElement.scrollHeight;
		}

	}, [scrollRef.current?.scrollHeight]);
	useEffect(() => {
		console.log(pathName)
	}, [pathName])
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
							speed={200}
							wrapper="div"
							cursor={false}
							style={{ fontSize: '18px' }}
						/>
					</div>
				)
			}
			<div className="link-lesson">
				{
					pathName === "locationfigure"
						? <a href="/">
							<button>
								Перейти до завдань
							</button>
						</a>
						: <Link
							to={`/task/${pathName}`}>
							<button>
								Перейти до завдань
							</button>
						</Link>
				}

			</div>
		</div>
	);
}