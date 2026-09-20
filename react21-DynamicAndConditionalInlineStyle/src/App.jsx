import { useEffect, useState } from "react"

function App() {
  const [cardStyle,setCardStyle] = useState(
    {
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
      
  }
  )

  const [textColor,setTextColor]=useState('black')
  
  const [Grid,setGrid]=useState(true)


  const updateTheme=(bgColor,textColor)=>{
    setCardStyle({...cardStyle,backgroundColor:bgColor})
setTextColor(textColor)
  }
/*
 ❌ Without spread — wipes out border, width, boxShadow, margin
setCardStyle({ backgroundColor: bgColor })
 result: { backgroundColor: '#ccc' }  ← everything else gone!

 ✅ With spread — keeps all existing properties, only updates backgroundColor
setCardStyle({ ...cardStyle, backgroundColor: bgColor })
 result: { border: "...", width: "...", boxShadow: "...", margin: "...", backgroundColor: '#ccc' }

 textColor holds just one simple value:
'black'   →   'red'   →   'black'

*/

  return (
    <>
      <h1 style={{ color: 'red' }}>Inline Style in React Js</h1>
      
      <button onClick={()=>updateTheme('#ccc','red')}>Gray Theme</button>
      <button onClick={()=>updateTheme('white','black')}>Default Theme </button>
      
      <button onClick={()=>setGrid(!Grid)}> Toggle Grid </button>



      <div style={{ display: Grid ?'flex':'block',flexWrap:"wrap"  }}>
        <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' , color:textColor}}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>

         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px'  , color:textColor}}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px'  , color:textColor }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px'  , color:textColor }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px'   , color:textColor}}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' , color:textColor }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' , color:textColor }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px'  , color:textColor}}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;