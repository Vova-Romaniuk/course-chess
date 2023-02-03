import React, { useEffect, useState } from "react";
import "./BoardLesson.scss"
import defaultData from "./datas/defaultData"
function BoardLesson(){    
    const [board, setBoard] = useState(defaultData);
    const letters = ['a','b','c','d','e','f','g','h']
    const numbers = ['8','7','6','5','4','3','2','1']
    const movePawn = () =>{
        setTimeout(() => {
            board[6][2].name = ""
            board[6][2].icon = ""
            board[5][2].name = "pawn"
            board[5][2].icon = "https://www.chess.com/chess-themes/pieces/neo/150/wp.png"  
            setBoard([...board])
        }, 3000);
       
       
    }
    useEffect(()=>{
      
        board[6][2].name = "pawn"
        board[6][2].icon = "https://www.chess.com/chess-themes/pieces/neo/150/wp.png" 
        setBoard([...board])
        movePawn();
          
    },[])   

    return(
        <div className="board">
            {
                board?.map((rows,indexRow)=>(
                    <div className="rows" с>
                        {
                            rows?.map((column,indexColumn) =>(
                            <div className="column" key = {indexColumn}>
                                <div className="box">
                                    {
                                        column.icon === "" ? <></> : <img src={column.icon}/>
                                    }
                                  
                                   {
                                     indexColumn === 0 ? <span className="numbers">{numbers[indexRow]}</span>:<span></span>
                                   } 
                                   {
                                     indexRow === 7 ? <span className="letters">{letters[indexColumn]}</span>:<span></span>
                                   } 
                                 </div>
                                
                            </div>
                        ))
                        }
                       
                    </div>
                ))
            }
            <button /*onClick={() => movePawn()}*/>Start</button>
        </div>
    );
}
export default BoardLesson;