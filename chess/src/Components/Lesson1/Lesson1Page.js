import React, { useEffect, useState } from 'react';
import './Lesson1Page.scss';
import FullBoard from '../FullBoard';
import { useSelector, useDispatch } from 'react-redux';
import { historySelector, counterArraySelector, counterSelector } from '../slices/historySlice';



function Lesson1Page() {

	const historySteps = useSelector(historySelector);
    const letterNameFigure = (obj) =>{
        switch(obj.name){
            case "pawn": 
               return bit(obj) === "x" ? `${obj.prev.slice(0, -1)}` : ""
            case "knight": 
                return  "N"
            case "bishop": 
                return "B"
            case "king": 
                return "K"
            case "queen": 
                return "Q"  
            case "rook": 
                return "R" 
            default: 
                return "";     
        }
    } 
    const bit = (obj) =>{
        return obj.prevColor != obj.nextColor && obj.nextColor != "" ?  "x" : ""
    }
    const checkBitPawn = (obj) =>{

    }
	return (
		<div className="lesson">
			<div className="line-steps">
                <div className="history">
                    {historySteps?.map((elem, index) =>(
					    elem.prevColor === "white" 
                        ?  <span key={index}>   <span className='number-step'>{Math.round(index/2) + 1 + "."}</span>  { "  " + letterNameFigure(elem) + bit(elem) + elem.next +  "  " }</span>
                        :  elem.prevColor === "black" 
                            ?  <span key={index}>  {  letterNameFigure(elem) + bit(elem) + elem.next +  "  "}</span> 
                            : null
                ))}
                </div>
				
			</div>
			<div className="board-wrapp">
				<FullBoard />
			</div>
		</div>
	);
}
export default Lesson1Page;
//setHistorySteps = {setHistorySteps}
