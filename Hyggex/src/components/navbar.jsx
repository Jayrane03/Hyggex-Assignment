import React from 'react'
import "../styles/component.css"
import "../styles/media_query.css";
const Navbar = () => {
  return (
   <>
   <nav className='w-100 nav flex justify-between'>
 
    <div className="nav_left">
        <img src="/Images/logo.png" alt="KK" />
    </div>
    <div className="nav_right">
        <ul className="flex list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Flashcard</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li className='login-btn'><a  href="#">Login</a></li>
        </ul>
    </div>
    <div className="sub_nav absolute flex justify-center gap-2">
   <img src="/Images/home.png" width="30px" height="30px" alt="" /> 
   <i class="fas fa-chevron-right"></i>
   <a href="flashcard">Flashcard</a>
   <i class="fas fa-chevron-right"></i>
   <a href="mathematics">Mathematics</a>
   <i class="fas fa-chevron-right"></i>
   <a className="font-semibold" href="relationandfunction">Relation and Function</a>



    </div>
   </nav>
   
   </>
  )
}

export default Navbar