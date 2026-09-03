import { useState } from "react";


function App() {

  const[value,setValue]=useState("")
return(

 <div>
  <h1>
    Get Input field value
  </h1>


 
 
  <input type="text"  value={value} onChange={(event)=>setValue(event.target.value)} placeholder="type here" />
 <br /> <br /> <br /> <br /> <br />
  <h2> typed: {value}</h2>
 <button onClick={()=> setValue("")}>  clear value </button>
 
 </div>

)
}

export default App;