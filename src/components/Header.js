import React from "react";
import { FilterByTechnique } from "./FilterByTechnique";




function Header({inputTechnique, handleTechniqueInput}) {
      //EVENT FUNCTIONS
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

    return (
        <header className="header">
            <p className="header__name">Vincent van Gogh</p>
              
            <form className="header__form" onSubmit={handleSubmit}>
                <FilterByTechnique 
                    inputTechnique={inputTechnique} 
                    handleTechniqueInput={handleTechniqueInput}
                />
                
            </form>
        </header>       
        
    );
}

export { Header };