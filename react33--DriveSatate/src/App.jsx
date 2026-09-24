import { useState } from "react"



function App() {
  const[users,setUsers]=useState([])
 const[user,setUser]=useState('')


 const total=users.length;
 const last=users[users.length-1]
 const unique=[...new Set(users)].length
  return(
  <div>
    <h2>total user</h2>
    <h2>last user</h2>
    <h2>unique Total user </h2>
    <input type="text" onChange={(event)=>setUser(event.target.value)}  placeholder="add new user "/>
    <button onClick={handleAddUser} > Add User</button>

  </div>
  )
}

export default App
