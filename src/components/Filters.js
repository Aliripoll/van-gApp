import React from "react";
import { FilterByTechnique } from "./FilterByTechnique";
import { FilterByText } from "./FilterByText";



function Filters( {inputTechnique, handleTechniqueInput, filterByText ,handleTextInput} ) {

    //EVENT FUNCTIONS
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <form className="header__form" onSubmit={handleSubmit}>
            <FilterByTechnique 
            
                inputTechnique={inputTechnique} 
                handleTechniqueInput={handleTechniqueInput}
                
            />
            <FilterByText 
            
                filterByText={filterByText} 
                handleTextInput={handleTextInput}
            />
        </form>
    )
};

export { Filters };