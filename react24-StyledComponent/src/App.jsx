import { useEffect, useState } from "react"
import styled from "styled-components"


function App() {
  /* first search in chrome the styled component npm and go that website and copy the download option
 in the styled component and paste it that file which you want add dependancy here the projct is 
 react24-styledcomponent and you see in the packagejson dependanct the style dependancy added  
 "styled-components": "^6.5.3"

 */

/*
 const Heading=styled.h1`
 color:red;
 border:1px solid green;
 border-radis:5px;
 margin:10px;
 padding:10px;`
*/
// we can use another type style with object see below 

const Heading=styled.h1({
   color:'red',
 border:'1px solid green',

 borderRadis:'5px',
 margin:'10px',
 padding:'10px'
})

  return (
    <>

      <h1 > External Style from style component  </h1>

      <Heading> Hello heading1 </Heading>
        <Heading> Hello heading2 </Heading><Heading> Hello heading3 </Heading>
        <Heading> Hello heading4 </Heading>

     



    </>
  );
}

export default App;