import React from "react";
import { FilterByTechnique } from "./FilterByTechnique";




function Header() {
    return (
        <header className="header">
            <div className="header__name">Vincent van Gogh</div>  
            <form className="header__form">
                <FilterByTechnique />
            </form>
        </header>       
        
    );
}

export { Header };