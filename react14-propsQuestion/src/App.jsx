import { useState } from "react"
import Clock from "./assets/Clock"
import User from "./assets/User"


function App(){




  const[color,setColor]=useState('green')

  
    return (

      <div >


        <select onChange={(event)=>setColor(event.target.value)}    >

<option value="blue"></option>
<option value="red">red</option>
<option value="yellow">yellow</option>
<option value="green">green</option>


        </select>

<Clock color={color}> </Clock>

      </div>
    )
}


export  default App