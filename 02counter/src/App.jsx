import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  let [counter,setCounter]=useState(15)  
  
  
  /*
// this is update by react where he see count update it no we write anything document.queryselector means if we 
// chanage 3  place count then i am write 3 times  document.queryselector in js but in case of react automatically
//  change the counter value 3 apace
  */


// let counter =15

const addValue=()=>{
  console.log("clicked  ", counter);

  counter=counter+1
  setCounter( counter)
}


const removeValue=()=>{
  console.log("clicked  ", counter);


  setCounter(counter-1)
}
  return (
    <>
<h1> sagar aur react </h1>
<h2>counter value {counter} </h2>




<button   onClick={addValue}>Add  value  {counter} </button>

<br />

<button onClick={removeValue}> Remove value  {counter} </button>
    </>
  )
  
}

export default App
