import { useState } from "react";


function App() {
const [name,setName]=useState("")
const [password,setpassword]=useState("")
const [email,setemail]=useState("")
 
return(


  <div>
    <form action="">


      <input type="text"  value={name} onChange={(event)=>setName(event.target.value)} placeholder="name" />
            <br />   <br />
      <input type="password"  value={password} onChange={(event)=>setpassword(event.target.value)} placeholder="password" />
            <br />   <br />
      <input type="text"  value={email} onChange={(event)=>setemail(event.target.value)}  placeholder="enter email" />





      <br />   <br />
      <button> Submit</button>
      <button  onClick={()=>{setName(""),setpassword(""),setemail("")}}> clear</button>


      

<h1>{name}</h1>

<h1>{password}</h1>

<h1>{email}</h1>
    </form>


  </div>
)

}

export default App;