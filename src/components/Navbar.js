import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo/GoJunglee logo.png';

export default function Navbar() {

  const location = useLocation();


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning" style={{width:'100%'}}>
  <a className="navbar-brand" to="/"><img src={logo} alt='' style={{height:'60px',width:'130px'}}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className={`nav-item ${location.pathname !== '/' ? "active" : ""}`}>
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className={`nav-item ${location.pathname !== '/parks' ? "active" : ""}`}>
        <Link className="nav-link" to="/parks">Parks</Link>
      </li>
      <li className={`nav-item ${location.pathname !== '/blogs' ? "active" : ""}`}>
        <Link className="nav-link" to="/blogs">Blogs</Link>
      </li>
      <li className={`nav-item ${location.pathname !== '/pay' ? "active" : ""}`}>
        <Link className="nav-link" to="/pay">Pay</Link>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" to="/">Action</a>
          <a className="dropdown-item" to="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" to="/">Something else here</a>
        </div>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    </div>
  )
}
