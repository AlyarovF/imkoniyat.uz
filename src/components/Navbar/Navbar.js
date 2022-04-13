import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

export default class Navbar extends Component {
  state = { clicked: false, specialbox: false, searchsys: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  specialBox = () => {
    this.setState({ specialbox: !this.state.specialbox })
  }

  searchSys = () => {
    this.setState({ searchsys: !this.state.searchsys })
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
                    <div className="dropdown-content">
                      {item.dropDown.map((drop, index) => {
                        return (
                          <Link to={drop.url} className={drop.cName}>{drop.title}</Link>
                        )
                      })}
                    </div>
                  </li>
                )
              }
            })}
          </ul>
          <ul className='opportunity'>
            <li className='opportunity-modul speech'>
              <Link onClick={this.specialBox} to="" className=""><i className="fa-solid fa-eye"></i></Link>
              <div className={this.state.specialbox ? 'opportunity-box active' : 'opportunity-box'}>
                <div className='opportunity-content'>
                  <div>
                    <div className='item color'>
                      <h1>COLOR</h1>
                    </div>
                    <div className='item discolor'>
                      <h1>DISCOLOR</h1>
                    </div>
                    <div className='item invert'>
                      <h1>INVERT</h1>
                    </div>
                  </div>
                  <div className="special-box">
                    <div className="special-checkboxes">
                      <label>
                        <input type="checkbox" />
                        <span>Disphoto</span>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <span>TTS</span>
                      </label>
                    </div>
                    <h3>Font size</h3>
                    <div className="special-range">
                      <p>Aa</p>
                      <input type="range" className="range" min="10" value="16" max="22" />
                      <h3>Aa</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='opportunity-modul search'>
              <Link onClick={this.searchSys} to="" className=""><i className="fa-solid fa-magnifying-glass"></i></Link>
              <div className={this.state.searchsys ? 'opportunity-box active' : 'opportunity-box'}>
                <div className='opportunity-content'>
                  <div>
                    <span>Введите запрос</span>
                    <input type="search" placeholder='search...' />
                  </div>
                  <div>
                    Search
                    <i className='fas fa-search'></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  }
}