import { createElement } from "react";

import { useState } from "react";
import User from "./assets/User";

function App(){
 const [display2,setDisplay2]=useState(true)
  const [display,setDisplay]=useState(true)

//if we write here true then the text will be displayed esle it is not displaed if we write false then the text will not be displayed


  


  return (
    <div>
  <h1> State in react js </h1>


{
  display? <h1> hello sagar</h1>: null
}

  
  <button onClick={()=>setDisplay(!display)}>Toggle </button>

    // if we click  Toggle  then the text will be displayed and if we click again then the text will be hidden
    
    {
      display2 ? <User/> : null
    }
    
    </div>



      
      
  )
}
export default App