/*
this is inpure concept here guest value differetent
This variable lives OUTSIDE the component
Cup renders #1a → guest = 1
Cup renders #1b → guest = 2  ← shown on screen (wrong!)

Cup renders #2a → guest = 3
Cup renders #2b → guest = 4  ← shown on screen (wrong!)

Cup renders #3a → guest = 5
Cup renders #3b → guest = 6  ← shown on screen (wrong!)
let guest=0;
function App() {

  return(
  <div>
      <h1>
      keeping components pure 
    </h1>
    <Cup>    </Cup>
      <Cup>    </Cup>
        <Cup>    </Cup>
  </div>
  )
}

const Cup=()=>{
  guest=guest+1;
  console.log(guest);
  return(
    <h1>
      we have {guest} guest and we have to make {guest} cup  of tea 
    </h1>
  )
}
export default App

*/


function App() {

  return(
  <div>
      <h1>
      keeping components pure 
    </h1>
    <Cup guest={1}>    </Cup>
      <Cup  guest={2}>    </Cup>
        <Cup  guest={3}>    </Cup>
  </div>
  )
}

const Cup=({guest})=>{

  console.log(guest);
  return(
    <h1>
      we have {guest} guest and we have to make {guest} cup  of tea 
    </h1>
  )
}
export default App
