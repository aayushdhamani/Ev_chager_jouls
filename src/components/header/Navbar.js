import React from 'react';
import logo from './jouls3.png';
import "./header.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-white" >
        <div className="container-fluid"   >
          <nav className="navbar bg-body-white">
            <div className="container">
              <Link className="navbar-brand" to='/home'> 
                <img src={logo} alt="Bootstrap" width="100" height="50 " />
              </Link>
            </div>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/about'
                  className="nav-link active nav-item-text"
                  aria-current="page"
                  href="#"
                  style={{ color: 'green', textAlign: 'center' }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-item-text"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: 'green', textAlign: 'center' }}
                >
                  Survey Page
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item nav-item-text"  style={{ color: 'green', textAlign: 'center' }}href="#">
                      Review of 4W Charger
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item nav-item-text" style={{ color: 'green', textAlign: 'center' }} href="#">
                    Review of 2W Charger
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/Blogs'
                  className="nav-link active nav-item-text"
                  aria-current="page"
                  href="#"
                  style={{ color: 'green', textAlign: 'center' }}
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact'
                  className="nav-link active nav-item-text"
                  aria-current="page"
                  href="#"
                  style={{ color: 'green', textAlign: 'center' }}
                >
                  Contact Us
                </Link>
              </li>
           
              <li className='nav-item'>
            <form className="d-flex justify-content-center " role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
             
              <Link to='/downloadapp' button className="btn btn-outline-success" type="submit">
                Download App
              </Link>
            </form>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;