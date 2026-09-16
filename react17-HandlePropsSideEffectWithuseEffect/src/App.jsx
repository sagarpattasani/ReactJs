import { useEffect, useState } from "react"
import Counter from "./assets/Counter"



function App(){


const [Count,setCounter]=useState(0)
const [data,setdata]=useState(0)







    return (

      <div>
     <h1> handle props side effect eith useeffect  component </h1>

     <Counter Count={Count} data= {data}></Counter>
     <button onClick={()=>setCounter(Count+1)} > Count {Count}</button>
      <button onClick={()=>setdata(data+1)} > data {data}</button>
  
         

      </div> 
    )

  }

  export default App