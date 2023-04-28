

function FilterByTechnique ({inputTechnique, handleTechniqueInput}) {

    const handleInput = (ev) => {
        handleTechniqueInput(ev.target.value);
    }

    return (
        <fieldset>
            <legend>Técnica</legend>
            <div>
                <label>
                <input type="radio" id="all" value="all" checked={inputTechnique === "all"} onChange={handleInput} ></input>
                    <span>Todos</span> 
                </label>
                <label>
                    <input type="radio" id="paint" value="paint" checked={inputTechnique === "paint"} onChange={handleInput} ></input>
                    <span>Pintura al óleo</span> 
                </label>
                <label>
                    <input type="radio" id="draw" value="draw" checked={inputTechnique === "draw"} onChange={handleInput} ></input>
                    <span>Dibujo</span> 
                </label>
            </div>

        </fieldset>
    )
}

export { FilterByTechnique };