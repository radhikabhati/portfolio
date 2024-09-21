import './styles/Header.css';
//import { useState } from 'react';

// function setPath(url){
//  console.log(window.location.pathname)
//  window.location.pathname = url
// }


function Header({onClick}) {

  return (
    <div className="App">
      <header className="App-header">
        
       <ul className="horizontal-list">
       <li onClick={()=>onClick("portfolio")}>Home</li>
           <li onClick={()=>onClick("resume")} >Work</li>
           <li onClick={()=>onClick("art")}>Art</li>
           <li onClick={()=>onClick("contact")}>Contact</li>
       </ul>
           
       
      </header>

    </div>
  )
}

export default Header;
