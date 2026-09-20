import { useTransition } from "react";


function App() {
  /*

  by using the usestate
this is using the useState we can disable the butto for some time 

const [pending,setpending]=useState(false)
const handleButton=async ()=>{
  setpending(true)
  await new Promise(res=>setTimeout(res,200))
  setpending(false)
}
  */


// by using the useTranstions (it is always better)
const [pending,startTransition]=useTransition();
const handleButton=()=>{
startTransition(async ()=>{
  await new Promise(res=>setTimeout(res,5000))
})
}


return(
  <div>
    <h1>
      use transition in hook
    </h1>
{
  pending?
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />
  : null
}
    <button disabled={pending} onClick={handleButton}> click</button>
  </div>
)
}
export default App