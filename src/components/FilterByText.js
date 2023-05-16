
function FilterByText(props) {
    const handleInput = (ev) => {
        props.handleTextInput(ev.target.value);
    };


    return (
        <div className="form_secondDiv">
        <label className="form_input"> Search:</label> 
            <input 
            className="form_inputBox"
             type="text" 
             onInput={handleInput}
             id="name" 
             value={props.filterByText} 
             placeholder="the starry night" >
            </input>
        
        </div>
    )
}

export { FilterByText };