import React from 'react';
import './NavBar.css';

const NavBar = () => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
     
        <a className="navbar-brand">Quote App</a>
      </div>
  
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
        
        </ul>
        <form className="navbar-form navbar-left">
          <div className="form-group">
          </div>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="https://norby257.github.io/noreenPortfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
   
        </ul>
      </div>
    </div>
  </nav>
  )



export default NavBar;