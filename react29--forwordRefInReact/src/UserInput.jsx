import { forwardRef } from "react"

/*
this is the old way use in react js up to 18 versioin the forwardref
const UserInput=(props,ref)=>{


    return(
     <div>
      <input type="text" ref={ref} />
     </div>
    )
}

export default forwardRef(UserInput);

*/

// now we use react 19
const UserInput=(props)=>{


    return(
     <div>
      <input type="text" ref={props.ref} />
     </div>
    )
}

export default UserInput