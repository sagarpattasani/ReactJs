


import Crx from"./crx"


function App() {

const userName="sagar"


  return (


    <>
       <Crx/>
       <h1> about sagar</h1>
       <p>{userName} is a good boy</p>

       
    </>


    /* important -> 

Command	Kab Use Hota
npm run dev	Vite projects mein (React + Vite)
npm start	CRA projects mein (Create React App)


in vit   function name should be start with capital letter and file name you give .js or .jsx, but the file return html then you give jsx and neither save file.js
ex- here we give Crx.js or we can give file name Crx.jsx and import this file in App.js bt imort keyword see in above  
and when we return something in html we can return one mesaage if we want return more messae then we write inside
the div div is coniderd as the 1 message or you write inside the 	<> Fragment tag  like this 


function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  )
}



*/
    

  );
}

export default App;