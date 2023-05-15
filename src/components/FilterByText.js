
function FilterByText(props) {
    const handleInput = (ev) => {
        props.handleTextInput(ev.target.value);
    };


    return (
        <div className="form_div">
        <label className=""> Search: 
            <input 
             type="text" 
             onInput={handleInput}
             id="name" 
             value={props.filterByText} 
             placeholder="the starry night" >
            </input>
        </label>
        </div>
    )
}

export { FilterByText };