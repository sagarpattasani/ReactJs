function User({displayName,name,onClick}){

/*
 we did not write inside child class beacuse if we write here it is again and agin repeat the 
function how many times User(chilld) in App(parent)
*/


/*    

const displayName=(name)=>{
       alert(name)
      }

   const getUser=()=>{
   alert("get User Function called ")
 }

*/


    return(
     <div>
           <button onClick={()=>displayName(name)}>Display Name</button>
             <button onClick={()=>onClick(name)}>Get User </button>

     </div>
    )
}

export default User;