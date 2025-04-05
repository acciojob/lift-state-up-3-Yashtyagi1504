import React from "react";
import "./../styles/ChildComponent2.css"

function ChildComponent2({setSelectedOption}){

    function handleClick(){
        setSelectedOption("Option 2")
    }

    return (
        <div className="child2">
            <h2>Child Component 2</h2>
            <button onClick={handleClick}>Option 2</button>
        </div>
    )

}

export default ChildComponent2;