import { useEffect } from "react"
import { useState } from "react"

const Clock=({color})=>{

    const [time,setTime]=useState(0);

    useEffect(()=>{
       setInterval(()=>{
         setTime(new Date().toLocaleTimeString());
       
   

    },1000);

     /*setInterval(  what to do ,  how often  )
                     👇                👇
              update the time        every 1000ms
                                      (1 second)
    

     0s  → setTime("10:00:00 AM")  → React re-renders → shows 10:00:00
     1s  → setTime("10:00:01 AM")  → React re-renders → shows 10:00:01
     2s  → setTime("10:00:02 AM")  → React re-renders → shows 10:00:02


     */

     
},
[])

/* 
You use [] here because you only want to start the timer once — not restart it every time the 
component re-renders.

*/


/*

What you remove	Clock works?	Hidden problem
Remove []	✅ Yes	New interval created on every render — memory leak
Remove 1000	✅ Yes	Runs hundreds of times/second — wastes CPU

*/

return (

    <div >
         <h1 style={{color:color}}>    {time}  </h1>
    
    
    </div>
)
}
export default Clock