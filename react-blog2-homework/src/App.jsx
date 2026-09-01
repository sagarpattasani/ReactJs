import { createElement } from "react";

import Todo from "./assets/Todo";

function App(){
function Sum(a,b){
  return a+b;


}
function Operation(a,b,op){
if(op=="+"){
  return    a+b;
}
else if(op=="-"){
     return a-b;
}
else {
  return a*b;
}


}
let arr=[4,5,88]


const name="sagar";

 const Userobj={
  name:"sagar",
  address:"nateri"
 }


let path="https://i.pinimg.com/736x/10/66/46/1066461b5705cbd2a4a074dfa7df12e9.jpg";


return (
<div>

  <Todo></Todo>
<h1> {name?name:"user not found "}</h1>
  <h1> {Sum(2,4)}</h1>
  <h4>{Operation(5,5,"-")}</h4>

  <h4>{Userobj.name}</h4>
  <h4>{arr[0]}</h4>

  <img src={path} alt="" />
</div>
)

}
export default App