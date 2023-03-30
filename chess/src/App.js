import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import { Container } from './Components/Container';
import FullBoard from './Components/BoardTraining/FullBoard';
import { Lesson } from './Components/Lesson';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Menu />
				<Container>
					<Routes>
						<Route path='/' element={<FullBoard />} />
						<Route path='/lesson/:figure' element={<Lesson />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
