import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import { Container } from './Components/Container';
import FullBoard from './Components/BoardTraining/FullBoard';
import { Lesson } from './Components/Lesson';
import { LessonTask } from './Components/LessonTask';
import { taskAllFigures, task } from './constants/constantsSetLS';
import TrainBoardPage from './TrainBoardPage';

function App() {
	useEffect(() => {
		if (!localStorage.getItem('task')) {
			localStorage.setItem('task', JSON.stringify(task));
		}
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Menu />
				<Container>
					<Routes>
						<Route path="/" element={<TrainBoardPage />} />
						<Route path="/lesson/:figure" element={<Lesson />} />
						<Route path="/task/:figure" element={<LessonTask />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
