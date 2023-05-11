import React from "react";
import { FilterByTechnique } from "./FilterByTechnique";



function Filters( {inputTechnique, handleTechniqueInput} ) {

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
        </form>
    )
};

export { Filters };