import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import One from "./One";
import Two from "./Two";
import "./Navbar.css";
const Navbar = () => {
    return ( <>
   <BrowserRouter>
        <nav>
        
          <ul>
            <li><Link className='l' to="/" >Home</Link></li>
            <li><Link className='l' to="/One" >whole part using two parts</Link></li>
            <li><Link  className='l'to="/Two" >whole part using three parts</Link></li>
          </ul>
        </nav>
        <Routes>
<Route path="/" element={<Home />} /> 
           
          <Route path="/One"
            element={<One />} /> 
          <Route path="/Two"element={<Two />} /> 
        </Routes>
      </BrowserRouter>
    
    </> );
}
 
export default Navbar;