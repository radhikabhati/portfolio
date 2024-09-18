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
       <li onClick={()=>setPath("portfolio")}>Logo</li>
           <li onClick={()=>setPath("portfolio/tech")} >Software Engineering</li>
           <li onClick={()=>setPath("portfolio/resume")} >Resume</li>
           <li onClick={()=>setPath("portfolio/art")}>Art</li>
           <li onClick={()=>setPath("portfolio/contact")}>Contact</li>
       </ul>
           
       
      </header>

    </div>
  )
}

export default Header;
