import { useEffect } from "react"
import { useState } from "react"

const Clock=()=>{

    const [time,setTime]=useState(0);

    useEffect(()=>{
       setInterval(()=>{
         setTime(new Date().toLocaleTimeString());
       
    
    


    },1000);
},
[])



return (

    <div> <h1>{time}</h1></div>
)
}
export default Clock