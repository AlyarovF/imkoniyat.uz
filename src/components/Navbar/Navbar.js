import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

export default class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <>
        <nav className='NavbarItems'>
          <img className='navbar-logo' src={require('../assets/logo.png')} width="50" alt='logo' />
          <div className='menu-icon' onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars '}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              if (!item.dropDown) {
                return (
                  <li key={index}>
                    <Link to={item.url} className={item.cName}>
                      {item.title} {item.icon ? <i className={item.icon}></i> : <></>}
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li key={index} className="dropdown">
                    <Link to="" className={item.cName}>
                      {item.title} <i className="fa-solid fa-chevron-down"></i>
                    </Link>
                    <div class="dropdown-content">
                      {item.dropDown.map((drop, index) => {
                        return (
                          <a href={drop.url} className={drop.cName}>{drop.title}</a>
                        )
                      })}
                    </div>
                  </li>
                )
              }
            })}
          </ul>
          <div className='opportunity'>
            <i class="fa-solid fa-eye"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </nav>
        <Outlet />
      </>
    )
  }
}