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
    id:1
  
  },
  {
    name:'kunal',
    age:'21',
    email:'kunal@55gmail.com',
    id:1
  
  },
  {
    name:'tukuna',
    age:'21',
    email:'tukuna@55gmail.com',
    id:1
  
  },
  

]
  
  
    return (

      <div >
        <h1> lopp in jsx with map function </h1>
        <table border="1">

          <thead>
            <tr>
              <td>Id</td>
               <td>Name</td>
                <td>Email</td>
               <td>age</td>
            </tr>
          </thead>



          <tbody>

{
  userData.map((user)=>(
     <tr>
              <td>{user.id}</td>
               <td>{user.name}</td>
                <td>{user.email}</td>
               <td>{user.age}</td>
            </tr>

  ))
}

          </tbody>
        </table>



<h1>Dummy data </h1>
<table border="1">

          <thead>
            <tr>
              <td>Id</td>
               <td>Name</td>
                <td>Email</td>
               <td>age</td>
            </tr>
          </thead>


          <tbody>
            <tr>
              <td> 1 </td>
                  <td> Sagar </td>
                      <td> sagar@123.com </td>
                      <td> 21</td>
            </tr>

            <tr>
              <td> 1 </td>
                  <td> Sagar </td>
                      <td> sagar@123.com </td>
                      <td> 21</td>
            </tr>
            <tr>
              <td> 1 </td>
                  <td> Sagar </td>
                      <td> sagar@123.com </td>
                      <td> 21</td>
            </tr>

            <tr>
              <td> 1 </td>
                  <td> Sagar </td>
                      <td> sagar@123.com </td>
                      <td> 21</td>
            </tr>
          </tbody>



</table>


      </div>
    )
}


export  default App