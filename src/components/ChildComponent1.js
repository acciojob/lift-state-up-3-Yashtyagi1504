import React from "react";
import "./../styles/ChildComponent1.css";

function ChildComponent1({setSelectedOption}){

    function handleClick(){
        setSelectedOption("Option 1")
    }

    return(
        <div className="child1">
            <h2>Child Component 1</h2>
            <button onClick={handleClick} >Option 1</button>
        </div>
    )

}

export default ChildComponent1;