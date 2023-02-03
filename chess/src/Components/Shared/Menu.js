import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./Menu.scss"
function Menu(){

    return(
        <div className="menu">
            <ul> 
                <li>Грати</li>
                <li>Друзі</li>
                <li>Навчання
                    <div className="submenu">
                        <ul>
                            <li > <NavLink activeClassName="active"  to ="/lesson1"> Урок 1</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}
export default Menu;