import { createElement } from "react";



function App(){

  const userName="sagar";
  let x=20;
  let y=90;
// this way i can use in jsx file the varibale  name and vlaue 
//   return(
//    <div>
//  <h1>{userName}</h1>
//  <h2>{10+20+85}</h2>
//  <h3> {x*y}</h3>

//  <button onClick={()=> alert("hello" )} >hello</button>
//    </div>
//   )
// }



// this in write in js file
// const h1 = document.createElement("h1")
// h1.textContent = "hellodiv"

// const div = document.createElement("div")
// div.appendChild(h1)

// we can write this in jsx file  here we chhose the div and give id name rootdiv and inside div we give h1 and write inside h1 hellodiv
return createElement("div",{id:"rootdiv"},createElement("h1",{id:"h1Tag"},"hellodiv"));


// actually what i write above line  this produces in HTML: in below comment 


{/* <div id="rootdiv">
  <h1 id="h1Tag">hellodiv</h1>
</div> */}

}

// return (
//   <div className="rootOther">Hellomother </div>
// )
// }
export default App