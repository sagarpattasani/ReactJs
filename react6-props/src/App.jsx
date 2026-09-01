import { createElement } from "react";

import { useState } from "react";
import User from "./assets/User";

function App(){
 const [Count,setCount]=useState(3)


//if we write here true then the text will be displayed esle it is not displaed if we write false then the text will not be displayed


  


  return (
    <div>
  <h1> {Count} </h1>




  
  <button onClick={()=>setCount(Count+1)}>Counter </button>

  {
    Count==0? <h1> counte is 0</h1>: 
      Count==1? <h1> counte is 1 </h1>:

        Count==3? <h1> counte is 3</h1>:
          Count==4? <h1> counte is 4</h1>: null

    
  }

    </div>



      
      
  )
}
export default App