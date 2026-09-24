import { useRef } from "react";
import UserInput from "./UserInput";
import { useFormStatus } from 'react-dom'

// ─────────────────────────────────────────────────────────────────
// CustomerForm is a CHILD component placed INSIDE the <form> tag.
// This is important because useFormStatus() only works when the
// component using it is a CHILD of a <form> element — NOT in the
// same component where <form> is defined.
// ─────────────────────────────────────────────────────────────────
function CustomerForm(){

  // useFormStatus() is a React 19 hook that tracks the status of
  // the nearest parent <form>.
  // It returns { pending, data, method, action }.
  // We only destructure 'pending' here — the one we need.
  //
  // pending = false → form is idle (not submitting)
  // pending = true  → form's action function is still running
  const { pending } = useFormStatus();

  console.log(pending);
  // You'll see in the browser console:
  //   false → on first render (idle state)
  //   true  → while handleSubmit is running (during the 2s delay)
  //   false → after handleSubmit finishes

  return (                                 
    <div>
      <input type="text" placeholder="Enter Name" />
      <br /><br />
      <input type="text" placeholder="Enter Password" />
      <br /><br />

      {/* 
        Button behavior based on 'pending':
        - disabled={pending}      → button is unclickable while submitting
                                    (prevents double-click / duplicate submissions)
        - {pending ? ... : ...}   → shows "Submitting..." while running,
                                    "Submit" when idle
      */}
      <button disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// App is the PARENT component. It owns the <form> and the action.
// CustomerForm is placed inside <form> so useFormStatus() can
// communicate upward through React's internal form context.
// ─────────────────────────────────────────────────────────────────
function App() {

  // handleSubmit is an async function passed to <form action={...}>
  // This is a React 19 feature — forms can now accept async functions
  // as their action (similar to how HTML forms have an "action" URL,
  // but here it's a JS function instead).
  //
  // While this async function is running, React sets pending = true
  // in any child component using useFormStatus().
  const handleSubmit = async () => {

    // Simulating a real API call (e.g., fetch to a backend server).
    // setTimeout wrapped in a Promise creates an artificial 2-second delay.
    // In a real app, you'd replace this with: await fetch('/api/submit', {...})
    await new Promise(res => setTimeout(res, 2000));

    // This console.log runs AFTER the 2-second delay completes.
    // In real code, this is where you'd handle the server response.
    console.log("submit");
  };

  return (
    <>
      <h1>useFormStatus in React 19</h1>


      {/* 
        React 19 change: <form action={asyncFunction}> 
        Instead of onSubmit={...}, we use action={...} with an async function.
        React automatically calls this when the form is submitted,
        and tracks its pending state for useFormStatus() in child components.
      */}

      <form action={handleSubmit}>        
        {/* 
          CustomerForm MUST be inside <form> here.
          If you put useFormStatus() inside App itself (where <form> lives),
          it won't work — it only reads status from its PARENT form, not itself.
        */}
        <CustomerForm />
      </form>
    </>
  );
}

export default App;