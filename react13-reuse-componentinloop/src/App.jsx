import User from "./assets/User"


function App(){




  const userData=[
    {
    name:'sagar',
    age:'21',
    email:'sagarpattasani@55gmail.com',
    id:1
  
  },

  {
    name:'alok',
    age:'21',
    email:'alok@55gmail.com',
    id:2
  
  },
  {
    name:'kunal',
    age:'21',
    email:'kunal@55gmail.com',
    id:4
  
  },
  {
    name:'tukuna',
    age:'21',
    email:'tukuna@55gmail.com',
    id:3
  
  },
  

]
  
  
    return (

      <div >
 {
   
userData.map((user)=>(

<div key={user.id}> 
  <User data={user}></User> 

</div>
    ))
 }



      </div>
    )
}


export  default App