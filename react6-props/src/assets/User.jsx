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


// 1st we can acces the array elements using index as well
export function User5({ collegeNames }) {
  return (
    <div>
      <h1>{collegeNames[0]}</h1>   {/* urc */}
      <h1>{collegeNames[1]}</h1>   {/* kit */}
      <h1>{collegeNames[2]}</h1>   {/* eatm */}
    </div>
  );
}

// 2nd way acces the array elements using destructuring

export function User6({ collegeNames }) {
  const [first, second, third] = collegeNames;  // destructure

  return (
    <div>
      <h1>{first}</h1>    {/* urc */}
      <h1>{second}</h1>   {/* kit */}
      <h1>{third}</h1>    {/* eatm */}
    </div>
  );
}

// 3rd way acces the array elements using map function
export function User4({ collegeNames }) {
  return (
    <div>
      {collegeNames.map((college, index) => (
        <h1 key={index}>    {college}      </h1>  
      

// .map() iterates over each item in the array
// For each item, it returns a JSX element (<h1>)
// college → current element value (e.g., "MIT")
// index → current position (0, 1, 2…)


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