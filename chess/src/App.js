import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from './Components/MainPage';
import Menu from "./Components/Shared/Menu"
import Lesson1Page from './Components/Lesson1/Lesson1Page';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Menu/>
        <Routes>
       
          <Route path="/" element={<React.Fragment><MainPage/></React.Fragment>}/>
          <Route path="/lesson1" element={<React.Fragment><Lesson1Page/></React.Fragment>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
