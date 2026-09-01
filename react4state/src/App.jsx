import { createElement } from "react";

import { useState } from "react";
import Counter from "./assets/Counter";

function App(){

  const [fruit,setFruit]=useState("apple")



  const hanlerFruit=()=>{
    setFruit("banana")
  }



  return (
    <div>
  <h1> State in react js </h1>
  <h1> {fruit} </h1>
  <button onClick={hanlerFruit}>change Fruit name </button>



  <Counter />
    </div>



      
      
  )
}
export default App