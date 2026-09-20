
import  style from './css/userProfile.module.css'

function UserProfile(){

    return(
<div>

  // this is work for only the userProfile file not work for the App file so when we want change 
  //in the single compoinent file then we we create the file userProfile.module.css this type and acces the file you see below ={style.img}
        <h1 className={style.heading}> User Profile</h1>
        
   
        <div className={style.img}>
          <img
           
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnmDYzAQXVkIwHSHVQM_ddxXQ6xc07am9HojtpDFU-A&s"
          />

          <div className={style.textWrap}>
            <h4>Sagar Pattasani</h4>
            <p>Software developer</p>
          </div>
        </div>

     
      </div>

    )
}

export default UserProfile;