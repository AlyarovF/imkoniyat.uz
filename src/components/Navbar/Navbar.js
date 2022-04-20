import React, { Component, useState } from 'react'
import { MenuItems } from './MenuItems'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { languages } from '../../assets/languages';

export default function Navbar() {
  const [state, setState] = useState({ clicked: false, specialbox: false, searchsys: false })
  // state = { clicked: false, specialbox: false, searchsys: false }

  const handleClick = () => {
    setState({ clicked: !state.clicked })
  }

  const specialBox = () => {
    setState({ specialbox: !state.specialbox })
  }

  const searchSys = () => {
    setState({ searchsys: !state.searchsys })
  }


  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()


  return (
    <>
      <nav className='NavbarItems'>
        <img className='navbar-logo' src={require('../assets/logo.png')} width="50" alt='logo' />
        <div className='menu-icon' onClick={handleClick}>
          <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars '}></i>
        </div>
        <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            if (!item.dropDown) {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    {t(item.key)} {item.icon ? <i className={item.icon}></i> : <></>}
                  </Link>
                </li>
              )
            } else {
              return (
                <li key={index} className="dropdown">
                  <Link to="" className={item.cName}>
                    {t(item.key)} <i className="fa-solid fa-chevron-down"></i>
                  </Link>
                  <div className="dropdown-content">
                    {item.dropDown.map((drop, index) => {
                      if (!drop.icon) {
                        return (
                          <Link to={drop.url} className={drop.cName}>{t(drop.key)}</Link>
                        )
                      } else {
                        return (
                          <a style={{
                            opacity: currentLanguageCode === drop.icon ? 0.5 : 1
                          }} onClick={drop.onClick} className={drop.cName}>
                            <span className={`fi fi-${drop.icon} `} style={{
                              opacity: currentLanguageCode === drop.icon ? 0.5 : 1, marginRight: "5px"
                            }} ></span>
                            {drop.title}
                          </a>
                        )
                      }
                    })}
                  </div>
                </li>
              )
            }
          })}
        </ul>
        {/* <ul className='opportunity'>
          <li className='opportunity-modul speech'>
            <Link onClick={specialBox} to="" className=""><i className="fa-solid fa-eye"></i></Link>
            <div className={state.specialbox ? 'opportunity-box active' : 'opportunity-box'}>
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
            <Link onClick={searchSys} to="" className=""><i className="fa-solid fa-magnifying-glass"></i></Link>
            <div className={state.searchsys ? 'opportunity-box active' : 'opportunity-box'}>
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
        </ul> */}
      </nav>
      <Outlet />
    </>
  )
}
