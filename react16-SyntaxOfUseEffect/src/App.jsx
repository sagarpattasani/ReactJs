import { useEffect, useState } from "react"



function App(){


const [Counter,setCounter]=useState(0)

const [Data,setdata]=useState(0)
/*
use-1
useEffect(()=>{
  
  Callonce();// call function called if we click every time data or count button the callonce function called one time if we wtite inside the useeefect 
},[]

*/

/*
use-2
useEffect(()=>{
  
  Callonce();// call function called if we click every time  count button and in case of data it is not call beacusse we pass here only counter },[Counter]
},[Counter]
)


*/

// use-3
useEffect(()=>{
  
  Callonce();// call function aclled for both the counter and data beacuse we passed here both },[Counter,Data]
},[Counter,Data]
)



function CounterFunction(){
  console.log("conter function  called ", Counter);
}

function Callonce(){
  console.log("Callonce function  called ");
}


    return (

      <div>
     <h1> use effect on hook</h1>
     <button onClick={()=>setCounter(Counter+1)} > Count {Counter}</button>
      <button onClick={()=>setdata(Data+1)} > data {Data}</button>
  
         

      </div> 
    )

  }

  export default App