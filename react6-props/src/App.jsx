import { useState } from "react";

import User, { User2, User3, User4, StudentCard } from "./assets/User";

function App() {
  const [Count, setCount] = useState(3);

  // Variables
  let name = "sagar";
  let age = 21;
  let email = "sagarpattasani185@gmail.com";

  // Object
  let userObject = {
    name: "sagar",
    age: "21",
    email: "sagarpattasani185@gmail.com",
  };

  // Array
  let collegeNames = ["urc", "kit", "eatm"];

  // ✅ State ka naam alag rakha — studentName
  const [studentName, setStudentName] = useState("sagar pattasani");

  return (
    <div>
      <h1>Props in React JS</h1>

      {/* Simple Props */}
      <User name="sagar" age={25} />

      {/* Variable Props */}
      <User2 name={name} age={age} email={email} />

      {/* Object Props */}
      <User3 user={userObject} />

      {/* Array Props */}
      <User4 collegeNames={collegeNames} />

      {/* Conditional Render — ✅ Alag naam se conflict nahi */}
      {studentName && <StudentCard name={studentName} />}
      //"Agar studentName mein kuch value hai — TAB HI StudentCard dikhao!"

      {/* Button */}
      <button onClick={() => setStudentName("sagar")}>
        Update Student Name
      </button>
    </div>
  );
}

export default App;