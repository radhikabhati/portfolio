import './Header.css';

function setPath(url){
 console.log(window.location.pathname)
 window.location.pathname = url
}

function Header() {
 
  
  return (
    <div className="App">
      <header className="App-header">
       <ul className="horizontal-list">
       <li onClick={()=>setPath("")}>Logo</li>
           <li onClick={()=>setPath("tech")} >Software Engineering</li>
           <li onClick={()=>setPath("resume")} >Resume</li>
           <li onClick={()=>setPath("art")}>Art</li>
           <li onClick={()=>setPath("contact")}>Contact</li>
       </ul>
           
       
      </header>

    </div>
  )
}

export default Header;
