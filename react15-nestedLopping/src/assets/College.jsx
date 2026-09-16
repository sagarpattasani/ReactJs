import Student from "./Student"

const College=({college})=>{

    console.log(college)

    return(
        <div>


<h1> name:{college.name}</h1>
<ul>
    <li>
        
<h1> city:{college.city}</h1>
    </li>

     <li>
        
<h1> website:{college.website}</h1>
    </li>
  <li>
        
 <Student student={college.student}> </Student>
    </li>

</ul>
        </div>
    )
}

export default College