import { useState } from "react";



function App() {

const [gender,setGender]=useState("male")

const [city,setCity]=useState("delhi")


return(

<div>
  <h1> Handle Radio and Dropdown</h1>
  <h1> select gender </h1>


  <input type="radio"  onChange={(event)=>setGender(event.target.value)} value={"male"} checked={gender=='male'} id="male" />
  <label htmlFor="male">Male</label>
<br /><br /><br /><br />

  
  <input type="radio"  onChange={(event)=>setGender(event.target.value)} value={"female"} checked={gender=='female'}  id="female" />
  <label htmlFor="female">female</label>

<br /><br /><br />

<h1> geneder : {gender}</h1>

<h1>
  select city
</h1>


<select  onChange={(event)=>setCity(event.target.value)}  defaultValue={"delhi"}> 

<option value="nateri"> Nateri</option>

<option value="cuttack"> cuttack</option>

<option value="bbsr"> bbsr</option>

 </select>


<h2> selected city:{city}</h2>
</div>
)

}

export default App;