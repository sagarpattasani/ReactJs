import { createElement } from "react";

function Apple(){
  alert("Hello Apple");

}



const fruitName=(name)=>{
  alert(name);
}

const banana=()=>{
  alert("Hello Banana");
}


function App(){



  // here always call inside the function call not outside means Apple is present 2 times inside the function and outside alwyas inside call
  function Apple(){
  alert("Hello Apple2");

}



  return (
    <div>

       {/* <button onClick={Apple}>click me </button>  we did npot write any in the react js  with this (), we use here  only function name example here Apple  not we call Apple() */}
      <button onClick={Apple}>click me </button>

      <button onClick={banana}>click me </button>

      <button onClick={()=>fruitName("banana")}>click me </button>
    </div>
  )
}
export default App