import { useRef } from "react";
import UserInput from "./UserInput";

function App() {
  

   
const inputRef=useRef(null)
const updatInput=()=>{
  inputRef.current.value=1000;
  inputRef.current.focus();

}


  return (
    <>
<h1> ForWard Ref </h1>
<UserInput ref={inputRef}> </UserInput>
<button onClick={updatInput}> Update input field</button>


    </>
  );
}

export default App;