
function FilterByTechnique () {

    return (
        <fieldset>
            <legend>Técnica</legend>
            <div>
                <label>
                    <input type="radio"></input>
                    <span>Pintura al oleo</span> 
                </label>
                <label>
                    <input type="radio"></input>
                    <span>Dibujo</span> 
                </label>
            </div>

        </fieldset>
    )
}

export { FilterByTechnique };