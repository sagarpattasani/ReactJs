import { useEffect } from "react";

const Counter = ({ Count, data }) => {


  const handleCounter = () => {
    console.log("handleCounter called");
  }



  const handleCounter2 = () => {
    console.log("handleCounter2 called");
  }



  // ✅ Only fires when Count changes
  useEffect(() => {
    handleCounter();
  }, [Count]);





  // ✅ Only fires when data changes
  useEffect(() => {
    handleCounter2();
  }, [data]);          

// ✅ only  fires when data changes and fires when Count changes

    useEffect(() => {
    handleCounter2();
  }, [data],[Count]);  


  return (
    <div>
      <h1>Counter Component</h1>
      <h1>Count {Count}</h1>
      <h1>Data value {data}</h1>
    </div>
  )
}




export default Counter