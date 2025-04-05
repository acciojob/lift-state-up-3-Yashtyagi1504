
import React,{useState} from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {

  let [selectedOption,setSelectedOption] = useState("")

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 selectedOption = {selectedOption} setSelectedOption = {setSelectedOption}></ChildComponent1>
      <ChildComponent2 selectedOption = {selectedOption} setSelectedOption = {setSelectedOption}></ChildComponent2>
      <p>Selected Option: {selectedOption}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
