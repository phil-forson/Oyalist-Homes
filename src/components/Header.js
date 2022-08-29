import React from 'react'
import logo from '../img/oyalogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
<div>

    

    
    <div className="wrapper" id="wrapper">
      
      
      

      <header className="rt-header sticky-on">
        <div id="sticky-placeholder"></div>
          <div id="navbar-wrap" className="header-menu menu-layout1 header-menu menu-layout2">
              <div className="container">
                  <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-xl-2 col-lg-2">
                          <div className="logo-area">
                              <a href="https://www.homes.com/" className="temp-logo">
                                  <img src={logo} width="157" height="40" alt="logo" className="img-fluid" />
                              </a>
                          </div>
                      </div>
                      {/* <div className="col-xl-6 col-lg-6 d-flex justify-content-center position-static">
                          <nav id="dropdown" className="template-main-menu template-main-menu-3">
                              <ul>
                                  <li>
                                      <a href="https://www.homes.com/" className="active">Home</a>
                                      <ul className="dropdown-menu-col-1">
                                          <li>
                                              <a href="https://www.homes.com/">Home Page 1</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Home Page 2</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Home Page 3</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Home Page 4</a>
                                          </li>
                                          <li>
                                            <a href="https://www.homes.com/">Home Page 5</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li>
                                      <a href="https://www.homes.com/">About</a>
                                  </li>
                                  <li>
                                      <a href="https://www.homes.com/">Property</a>
                                      <ul className="dropdown-menu-col-1">
                                          <li>
                                              <a href="https://www.homes.com/">Properties Map Grid</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Properties Map List</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Properties Grid</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Properties List</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Properties Full Width</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Single Property 1</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Single Property 2</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Single Property 3</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li>
                                      <a href="https://www.homes.com/">Agents</a>
                                      <ul className="dropdown-menu-col-1">
                                          <li>
                                              <a href="https://www.homes.com/">Agent List Page</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Agencies List Page</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Single Agent Page</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Single Agency Page</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="position-static hide-on-mobile-menu">
                                      <a href="https://www.homes.com/">Pages</a>
                                      <div className="template-mega-menu">
                                          <div className="container">
                                              <div className="row">
                                                  <div className="col-3">
                                                      <div className="menu-ctg-title">Pages</div>
                                                      <ul className="sub-menu">
                                                          <li>
                                                              <a href="https://www.homes.com/">
                                                                  <i className="fas fa-chart-pie"></i>Blog 1</a>
                                                          </li>
                                                          <li>
                                                              <a href="https://www.homes.com/">
                                                                  <i className="fas fa-chart-pie"></i>Blog 2</a>
                                                          </li>
                                                          <li>
                                                              <a href="https://www.homes.com/">
                                                                  <i className="fas fa-chart-pie"></i>Blog Details Page</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-3">
                                                      <div className="menu-ctg-title">Pages</div>
                                                      <ul className="sub-menu">
                                                          <li>
                                                              <a href="https://www.homes.com/"><i className="fas fa-user"></i>Agent List Page</a>
                                                          </li>
                                                          <li>
                                                              <a href="https://www.homes.com/"><i className="fas fa-user"></i>Agencies List Page</a>
                                                          </li>
                                                          <li>
                                                              <a href="https://www.homes.com/"><i className="fas fa-user"></i>Agent Reviews Page</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-3">
                                                      <div className="menu-ctg-title">Pages</div>
                                                      <ul className="sub-menu">
                                                          <li>
                                                              <a href="https://www.homes.com/"><i className="far fa-money-bill-alt"></i>Agent Reviews Page</a>
                                                          </li>
                                                          <li>
                                                              <a href="https://www.homes.com/">
                                                                  <i className="fas fa-camera"></i>About page</a>
                                                          </li>
                                                          <li>
                                                              <a href="https://www.homes.com/">
                                                                  <i className="far fa-address-card"></i>Agent List Page</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-3">
                                                      <div className="menu-ctg-title">Pages</div>
                                                      <ul className="sub-menu">
                                                          <li>
                                                              <a href="https://www.homes.com/">
                                                                  <i className="fas fa-chalkboard-teacher"></i>Pricing Plan
                                                              </a>
                                                          </li>
                                                          <li>
                                                              <a href="https://www.homes.com/">
                                                                  <i className="fas fa-exclamation-triangle"></i>
                                                                  Error Page</a>
                                                          </li>
                                                          <li>
                                                              <a href="https://www.homes.com/">
                                                                  <i className="fas fa-spinner"></i>Contact Page</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="hide-on-desktop-menu">
                                      <a href="https://www.homes.com/">Pages</a>
                                      <ul>
                                          <li>
                                              <a href="https://www.homes.com/">About</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Property</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Blog</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">404 Error</a>
                                          </li>
                                          <li>
                                              <a href="https://www.homes.com/">Contact</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li>
                                      <a href="https://www.homes.com/">Contact</a>
                                  </li>
                              </ul>
                          </nav>
                      </div> */}
                      <div className="col-xl-4 col-lg-4 d-flex justify-content-end">
                          <div className="header-action-layout1">
                              <ul className="action-list">
                                  {/* <li className="action-item-style left-right-btn">
                                      <a href="https://www.homes.com/" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                          title="Compare">
                                          <i className="flaticon-left-and-right-arrows icon-round"></i>
                                          <div className="item-count">0</div>
                                      </a>
                                  </li>
                                  <li className="action-item-style wish-btn">
                                      <a href="https://www.homes.com/" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                          title="Favourites">
                                          <i className="flaticon-heart icon-round"></i>
                                          <div className="item-count">0</div>
                                      </a>
                                  </li> */}
                                  <li className="action-item-style my-account">
                                      <a href="https://www.homes.com/" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                          title="Sign In">
                                          <i className="flaticon-user-1 icon-round"></i>
                                      </a>
                                  </li>
                                  <li className="listing-button">
                                      <a href="https://www.homes.com/" className="listing-btn">
                                          <span>
                                              <FontAwesomeIcon icon={faPlusCircle} rotation = {270}/>
                                          </span>
                                          <span className="item-text">Add Property</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </div>
</div>

  )
}

export default Header;