import { useRef } from "react";
import User from "./User"
function App() {
  

   


/*
here we write function in parent beacuse if we write the function in child class then when i call
 child component that function reapeted every time  so we write inside the parent once and use this
  multiple times so thats why we write inside the parent 
  */


const displayName=(name)=>{
  alert(name)
}

const getUser=()=>{
  alert("get User Function called ")
}


  return (
    <>
<h1> Call parent component function from child component </h1>
<User displayName={displayName}  name="sagar"  onClick={getUser}> </User>
<User displayName={displayName}  name="alok" onClick={getUser}> </User>
<User displayName={displayName}  name="tukuna" onClick={getUser}> </User>
      

    </>
  );
}

export default App;