import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SUBMENU_FIGURES } from '../../constants/constants';
import './Menu.scss';

function Menu() {
	return (
		<div className='menu'>
			<ul>
				<li>
					<NavLink to='/lesson'>
						<i className='fa-solid fa-graduation-cap'></i>Навчання
					</NavLink>
					<ul className='submenu'>
						{SUBMENU_FIGURES.map((el) => (
							<li key={el}>
								<a
									activeClassName='active'
									href={`/${el.link}`}>
									{el.name}
								</a>
							</li>
						))}
						<li>
							<a
								activeClassName='active'
								href={`/lesson/game-goal`}>
								Гра та мета
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}
export default Menu;
