import React from "react";
import "../styles/Header.css";
import {Link, Route, Routes} from 'react-router-dom';


function Header() {
    return (
        <nav className="header_nav">
        <div className="header_name">Vincent van Gogh</div>  
        </nav>       
        
    );
}

export { Header };