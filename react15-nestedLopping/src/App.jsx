import College from "./assets/College"

function App(){



  const collegeData=[
    {
      name:'eatm',
      city:'khurdha',
      website:'eatm.com',
      student:[
        {
          name:"sagar pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        },
         {
          name:"tukuna pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        },
         {
          name:"alok pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        }
        ,
         {
          name:"crx pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        }
        
        

      ]
    }
    ,

    {
      name:'urc',
      city:'khurdha',
      website:'eatm.com',
      student:[
        {
          name:"sagar pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        },
         {
          name:"tukuna pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        },
         {
          name:"alok pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        }
        ,
         {
          name:"crx pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        }
        
        

      ]
    },
     {
      name:'ssbn',
      city:'khurdha',
      website:'eatm.com',
      student:[
        {
          name:"sagar pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        },
         {
          name:"tukuna pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        },
         {
          name:"alok pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        }
        ,
         {
          name:"crx pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        }
        
        

      ]
    },
     {
      name:'nateri',
      city:'khurdha',
      website:'eatm.com',
      student:[
        {
          name:"sagar pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        },
         {
          name:"tukuna pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        },
         {
          name:"alok pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        }
        ,
         {
          name:"crx pattasani",
          age:'21',
          email:'sagarpattasani67@gmail.com'
        }
        
        

      ]
    },
  ]
    return (

      <div>
       {
        collegeData.map((item,index)=>(
          <div key={index}>
        <College college={item}></College>
          </div>

        
        ))
       }
      </div>

    )
}
// College name	item.name → "eatm"
// City	item.city → "khurdha"
// Website	item.website → "eatm.com"
// All students	item.student → array of 4 students
// First student's name	item.student[0].name → "sagar pattasani"


export  default App