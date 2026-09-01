import { useState } from "react"



    const Counter=()=>{

        const [ count,setcount]=useState(0);

const updateCount=()=>{

            setcount(count+1)
        }

        return(

            
         <div>
               <h1> Counter </h1>

            <h1> {count }</h1>
        

            <button onClick={updateCount}> Update Count </button>


            <button onClick={()=>setcount(count-1)}>Delete Count </button>
         </div>
        )
        
    }




export default Counter