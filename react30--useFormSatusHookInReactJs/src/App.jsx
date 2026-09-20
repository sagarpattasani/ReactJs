import { useRef } from "react";
import UserInput from "./UserInput";
import { useFormStatus } from 'react-dom'


function CustomerForm(){
  const {pending}=useFormStatus();
  console.log(pending);


  return (                                  // ✅ return added
    <div>
      <input type="text" placeholder="Enter Name" />
      <br /><br />
      <input type="text" placeholder="Enter Password" />
      <br /><br />
      <button disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}

function App() {
  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("submit");
  };

  return (
    <>
      <h1>useFormStatus in React 19</h1>
      <form action={handleSubmit}>          {/* ✅ function reference, not string */}
        <CustomerForm />
      </form>
    </>
  );
}

export default App;