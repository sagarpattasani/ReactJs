import { useEffect, useState } from "react"
import { useRef } from "react";


function App() {
  

const inputRef=useRef(null)// here the refernce present which html we give ref={inputRes}
const H1ref=useRef(null)

const inputHandler=()=>{// and we use acces all the style or anything by the ref here is inputRes

  console.log(inputRef)
  inputRef.current.focus()
  inputRef.current.style.color='red'

  inputRef.current.placeholder='enter password'
  inputRef.current.value='123'
}
 const toggleHandler=()=>{


  if(inputRef.current.style.display!='none'){
    inputRef.current.style.display='none'

  }
  else{
    inputRef.current.style.display='inline'
  }
 
}
const h1Handler=()=>{

  console.log(H1ref)

    H1ref.current.style.color='green'


}



  return (
    <>

      <h1 > External Style from style component  </h1>

     <button onClick={toggleHandler}> Toggle</button>

     <input type="text" ref={inputRef}  placeholder="enter use name"/>
     <button onClick={inputHandler}> Focus on input field</button>
     <h1 ref={H1ref}> code with sagar</h1>
     <button onClick={h1Handler}> Handler</button>

    </>
  );
}

export default App;