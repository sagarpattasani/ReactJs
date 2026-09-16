const Student=({student})=>{
    return (
        <div>
            <h3>
                students
            </h3>

         {   
                student.map((student ,index) => (
    <ul key={index}>

{/* 
 <ul key={0}>  → sagar
<ul key={1}>  → tukuna
<ul key={2}>  → alok
<ul key={3}>  → crx */}
                   
                        <li>
                            Name:{student.name}
                        </li>
                    </ul>

                )
            )
}

            
       </div>

    )
}

export default Student