import { useTransition } from "react";

function App() {

  /*
  ============================================================
   WHY useTransition OVER useState FOR PENDING/LOADING STATE?
  ============================================================

  OLD WAY (useState) — manual and boilerplate-heavy:
  -------------------------------------------------------
    const [pending, setPending] = useState(false);

    const handleButton = async () => {
      setPending(true);                              // manually turn ON loader
      await new Promise(res => setTimeout(res, 200));
      setPending(false);                             // manually turn OFF loader
    };

  BETTER WAY (useTransition) — React manages it automatically:
  -------------------------------------------------------
    - No need to manually set true/false
    - React tracks the async operation internally
    - `pending` becomes true automatically when transition starts
    - `pending` becomes false automatically when it finishes
  ============================================================
  */


  // useTransition returns two things:
  // 1. pending  → boolean (true while the transition/async task is running)
  // 2. startTransition → function to wrap your async task inside
  const [pending, startTransition] = useTransition();


  const handleButton = () => {

    // startTransition tells React: "hey, this is a non-urgent background task"
    // React 19 upgrade: before React 19, async functions were NOT allowed inside
    // startTransition — now they are fully supported!
    startTransition(async () => {

      // Simulating a slow task (e.g., API call, data fetch)
      // Change 5000 → however many ms your real task takes
      await new Promise(res => setTimeout(res, 5000));

      // In a real app, you would do something like:
      // await fetch('/api/submit', { method: 'POST', body: ... });
    });
  };


  return (
    <div>
      <h1>useTransition Hook</h1>

      {/*
        CONDITIONAL RENDERING based on `pending`:
        -----------------------------------------
        - While the async task runs  → pending is TRUE  → show loading GIF
        - After the task finishes    → pending is FALSE → show nothing (null)

        This GIF displays for exactly as long as the setTimeout delay (5000ms here)
      */}
      {pending ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="Loading..."
        />
      ) : null}

      {/*
        BUTTON:
        -------
        - disabled={pending} → button is unclickable while task is running
          (prevents the user from clicking multiple times during loading)
        - Once pending becomes false → button is clickable again
      */}
      <button disabled={pending} onClick={handleButton}>
        Click
      </button>

    </div>
  );
}

export default App;