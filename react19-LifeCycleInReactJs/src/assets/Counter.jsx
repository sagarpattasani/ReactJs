import { useEffect } from "react";

const Counter = ({ Count, data }) => {




  const handleCounter = () => {
    console.log("handleCounter called");
  }



  const handleCounter2 = () => {
    console.log("handleCounter2 called");
  }

// life cycle of react js stage1-(mounting phase only )
  // useEffect(()=>{
  // console.log("mounting phase only")

  // },[])

  //stage2 (update phase only )
  // useEffect(()=>{
  // console.log("update phase only")

  // },[Count])

  
  // stage3 (unmounting  phase only )
  useEffect(()=>{ 
    return()=>{
       console.log("unmount phase only")
    }

  },[])



  return (
    <div>
      <h1>Counter Component</h1>
      <h1>Count {Count}</h1>
      <h1>Data value {data}</h1>
    </div>
  )
}




export default Counter