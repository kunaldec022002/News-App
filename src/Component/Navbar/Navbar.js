import React from "react";
import './Navbar.css';

function Navbar(){
  return(
    <div>
         
        <div id="nav2">
                  
          <nav className="navbar navbar-expand-lg" id='navbar' >
            <div className="container-fluid">
              <a className="navbar-brand" id='navbar-brand' >NEWS_APP</a>
                          
                <form className="d-flex" role="search">
                    <input className="form-control me-2" id="serach-engine"type="search" 
                     
                    onChange={(e)=> {}} placeholder="Search Any News" aria-label="Search"/>
                          
                </form>
                          
            </div>
          </nav>
  
        </div>
    </div>
  )
}

export default Navbar;