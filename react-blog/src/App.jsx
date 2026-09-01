
import Header from "./assets/Header"
import Login,{key, Profile,Settings} from "./assets/Usercomponent"

function App(){
  return(
    <div>

      <Login></Login>
      <Settings></Settings>
      <Profile></Profile>

      <h1>Hello {sum()} </h1>
      <Header/>
      <Apple/>
     <Colour> </Colour>
     <h1>{key}</h1>
    </div>
  )
}

function Apple(){

  alert(sum())
  return(
    <div>
      <h1>Apple </h1>
    
    </div>
  )
}

function Colour(){
  return(
    <div>
      <h1>red </h1>
  
    </div>
  )
}

function sum(){
  return 10+10;
}



export default App