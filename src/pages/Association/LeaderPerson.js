import React from 'react'
import { Link } from 'react-router-dom'

export default function LeaderPerson(props) {
    return (
        <div className='leader-person'>
            <div className='thumb'>
                <img src={props.src} width="220" height="305" alt='leader' />
            </div>
            <div className='text-person'>
                <h3>{props.who}</h3>
                <h2>{props.fullname}</h2>
                <Link className='biography' to={props.url}><span>Biography</span></Link>
            </div>
        </div>
    )
}
