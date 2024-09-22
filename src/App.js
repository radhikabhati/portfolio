
//import {  Routes, Route } from "react-router-dom";
import { useCallback , useState} from "react";
import Header from "./Header";
import Art from "./Art";
import Landing from "./Landing";
import Tech from "./Tech";
import Resume from "./Resume";
import Contact from "./Contact";



export default function App() {
 
  const [page, setPage] = useState("portfolio");


const handleClick = useCallback((value) => {
  
  setPage(value);
  
}, []); // Only recreate handleClick when count changes
  return (
    <>
      <header>
      <Header onClick={handleClick} />

    
      </header>
      <div>
      {page === "portfolio" && <Landing />}
        {page === "tech" && <Tech />}
        {page === "resume" && <Resume />}
        {page === "art" && <Art />}
        {page === "contact" && <Contact />}

      </div>
    </>
   
  );
}

