// function User(data){
//     return(

//         <div> 

//             <h1> {data.name} </h1>

//             <h1> {data.age}</h1>
//         </div>

//     )
// }

  // Default Export
function User({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
}

// Named Exports
export function User2({ name, age, email }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div>
  );
}

export function User3({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
    </div>
  );
}

export function User4({ collegeNames }) {
  return (
    <div>
      {collegeNames.map((college, index) => (
        <h1 key={index}>{college}</h1>  // ✅ map use 
      ))}
    </div>
  );
}

export function StudentCard({ name }) {  
  return (
    <div>
      <h1>Student Name: {name}</h1>
    </div>
  );
}

export default User;