import { createElement } from "react";



function App(){

  const userName="sagar";
  let x=20;
  let y=90;

//   return(
//    <div>
//  <h1>{userName}</h1>
//  <h2>{10+20+85}</h2>
//  <h3> {x*y}</h3>

//  <button onClick={()=> alert("hello" )} >hello</button>
//    </div>
//   )
// }

return createElement("div",{id:"rootdiv"},createElement("h1",{id:"h1Tag"},"hellodiv"));

}

// return (
//   <div className="rootOther">Hellomother </div>
// )
// }
export default App