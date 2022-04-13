import React from 'react'
import { SideBarItems } from './SideBarItems'
import { Link, Outlet } from 'react-router-dom'
import './index.css'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <ul>
                {SideBarItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                <span>
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Outlet />
        </div>
    )
}
