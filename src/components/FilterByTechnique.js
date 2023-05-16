
function FilterByTechnique ({inputTechnique, handleTechniqueInput}) {

    const handleInput = (ev) => {
        handleTechniqueInput(ev.target.value);
    }

    return (
        <div className="form_div">
            <p className="form_title">Technique:</p>
            
                <label>
                <input type="radio" id="all" value="all" checked={inputTechnique === "all"} onChange={handleInput} ></input>
                    <span className="form_technique">All</span> 
                </label>
                <label>
                    <input type="radio" id="paint" value="paint" checked={inputTechnique === "paint"} onChange={handleInput} ></input>
                    <span className="form_technique">Oil on canvas</span> 
                </label>
                <label>
                    <input type="radio" id="draw" value="draw" checked={inputTechnique === "draw"} onChange={handleInput} ></input>
                    <span className="form_technique">Draw</span> 
                </label>
            </div>
    )
}

export { FilterByTechnique };