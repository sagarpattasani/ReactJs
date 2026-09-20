import { useEffect, useState } from "react"
import Counter from "./assets/Counter"



function App(){


const [Count,setCounter]=useState(0)
const [data,setdata]=useState(0)
const [display,setDisplay]=useState(true)







    return (

      <div>
     <h1> handle props side effect eith useeffect  component </h1>

{
  display? <Counter Count={Count} data={data}> </Counter>:null
}

     <button onClick={()=>setCounter(Count+1)} > Count {Count}</button>
      <button onClick={()=>setdata(data+1)} > data {data}</button>
      <button onClick={()=>setDisplay(!display)} > Toggle </button>
  
         

      </div> 
    )

  }

  export default App