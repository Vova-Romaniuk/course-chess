import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SUBMENU_FIGURES } from '../../constants/constants';
import './Menu.scss';

function Menu() {
	const [active, setActive] = useState('train-board');
	const [submenuActive, setSubmenuActive] = useState('');

	useEffect(() => {
		const path = window.location.href;
		if (path.includes('lesson') || path.includes('task')) {
			setActive('lesson');
		} else setActive('train-board');
	}, []);

	const getUaName = (name) => {
		switch (name) {
			case 'Knight':
				return 'Кінь';
			case 'King':
				return 'Король';
			case 'Rook':
				return 'Тура';
			case 'Bishop':
				return 'Слон';
			case 'Pawn':
				return 'Пішак';
			case 'Queen':
				return 'Королева';
			default:
				return;
		}
	};
	return (
		<div className="menu">
			<ul>
				<li className={active === 'lesson' && 'active'}>
					<i className="fa-solid fa-graduation-cap"></i>Навчання
					<ul className="submenu">
						{SUBMENU_FIGURES.map((el) => (
							<Link
								to={`/${el.link}`}
								onClick={() => {
									setActive('lesson');
									setSubmenuActive(el.name);
								}}>
								<li
									className={
										submenuActive === el.name &&
										'active-submenu'
									}
									key={el}>
									{getUaName(el.name)}
								</li>
							</Link>
						))}
						<Link
							to={`/lesson/locationfigure`}
							onClick={() => {
								setActive('lesson');
								setSubmenuActive('gamegoal');
							}}>
							<li>Розташування фігур</li>
						</Link>
					</ul>
				</li>
				<a href="/">
					<li
						className={active === 'train-board' && 'active'}
						onClick={() => {
							setActive('train-board');
						}}>
						<i className="fa-solid fa-dumbbell"></i>Дошка для
						тренувань
					</li>
				</a>
			</ul>
		</div>
	);
}
export default Menu;
