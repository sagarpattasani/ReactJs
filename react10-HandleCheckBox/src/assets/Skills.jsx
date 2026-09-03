import { useState } from "react"

function Skills(){


    const [skills,setSkills]=useState([])


    const handleSkills=(event)=>{
      console.log(event.target.value,  event.target.checked)

     
      if(event.target.checked){
 // ✅ CHECKED → ADD skill
        setSkills([...skills,event.target.value])
        // ...=spread operator selsect multiple

      }

      else{
         // ❌ UNCHECKED → REMOVE skill

        setSkills([skills.filter((item)=> item!=event.target.value)])
        //here remove one so we dont use spread operator if we use also same work
      }


    }




//     Summary
// Action	Method	Why
// Check a skill	[...skills, newSkill]	Keep old skills + add new
// Uncheck a skill	filter(item => item != value)	Remove only that skill
// Never mutate directly	skills.push() ❌	React won't re-render

// Core Rule → React only re-renders when it gets a brand new array/object. Spread and filter both create new arrays, so React knows state changed. 🔄
    
    
    
    
    return(
<div> 
    <h3> select yiur skills </h3>
<input type="checkbox"   onChange={handleSkills} id="php" value= "php"/>

    <label htmlFor="php"> Php</label>

    <br /> <br />
<input type="checkbox"   onChange={handleSkills}  id="js" value= "js"/>

    <label htmlFor="js"> Js</label>

    <br /> <br />

    <input type="checkbox"     onChange={handleSkills}  id="node" value= "node"/>

    <label htmlFor="node"> Node</label>

    <br /> <br />

    <input type="checkbox"    onChange={handleSkills}    id="java" value= "java"/>

    <label htmlFor="java"> Java</label>

    <br /> <br />
</div>

    )

}


export default Skills