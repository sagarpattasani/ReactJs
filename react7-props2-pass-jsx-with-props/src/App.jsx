import { useState } from "react";

import User from "./assets/User";
import Wrapper from "./assets/Wrapper";
function App() {
return(

  <div>
  
  <div>
<User name="dj alok"> </User>
{/* User dj alok */}

<User  /> 
{/* User sagar */}
  </div>


<Wrapper >  <h1> hello evryone </h1></Wrapper>
<Wrapper >  <h1 style={{color:'blue'}}> This is sagar  </h1></Wrapper>
<Wrapper >  <h1> how are you </h1></Wrapper>
</div>

)
}

export default App;