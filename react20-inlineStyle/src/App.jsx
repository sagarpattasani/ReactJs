import { useEffect, useState } from "react"


function App() {
  const cardStyle = {
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px"
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>Inline Style in React Js</h1>

      <div style={{ display: 'flex',flexWrap:"wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>

         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
         <div style={cardStyle}>
          <img
            style={{ width: '200px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div style={{ padding: '5px' }}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;