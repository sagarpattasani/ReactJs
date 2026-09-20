import { useRef } from "react";

function App() {
  

   


const handleForm=(event)=>{
  event.preventDefault();
  const user=document.querySelector("#user").value
    const password=document.querySelector("#password").value
    console.log(user,password)

}
const UserRef=useRef()
const PasswordRef=useRef()


const handleFormRef=(event)=>{
  event.preventDefault();
  const user=UserRef.current.value
    const password=PasswordRef.current.value
    console.log("handleFormRef",user,password)
      


}

  return (
    <>

      <h1 >  unControlled component  </h1>

      <form action="" method="post"  onSubmit={handleForm}>
  <input type="text" id="user" placeholder="enter user name" />
<br />
  <input type="password" id="password" placeholder="enter  password" />
<br />
<button> submit </button>

      </form>

<h1> unControlled component  with useRef</h1>
       <form action="" method="post"  onSubmit={handleFormRef}>
  <input type="text"  ref={UserRef} id="userref" placeholder="enter user name" />
<br />
  <input type="password" ref={PasswordRef} id="passwordref" placeholder="enter  password" />
<br />
<button> submit </button>

      </form>




    </>
  );
}

export default App;