import React, { useState } from "react";
import './header.css'
import {BiMenu} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () =>{
    const [menuOpened , setMenuOpened] = useState(false)

    const getMenuStyles = (menuOpened)=>{
            if(document.documentElement.clientWidth <= 800){
                return(
                    {right: !menuOpened && "-100%"}
                )
            }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100}/>    
            <OutsideClickHandler onOutsideClick={()=>{
                setMenuOpened(false)
            }}>
            <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#Residencies">Residencies</a>
            <a href="#Values">Our Values</a>
            <a href="#Contact">Contact us</a>
            <a href="#GetStarted">Get Started</a>
            <button className="btn">
            <a href="#Contact">Contact</a>
            </button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                <BiMenu size={30}/>
            </div>
            </div>
            
            
        </section>
    )
}

export default Header