import React from 'react'
import { Link } from 'react-router-dom'
import './Blocks.css'

export default function Blocks(props) {
    return (
        <div className='pressBlocks'>
            <div className='image'>
                <div className='text'>
                    <p className='text-news'>Новости</p>
                    <p>{props.title}</p>
                </div>
                <img src={props.image} alt="image" />
            </div>
            <h3><Link to={`/press-center/${props.url}`}>
                {props.title}
            </Link></h3>
            <div className='date'>
                <div><i class="fa-solid fa-eye"></i> {props.views}</div>
                <div><i class="fa-solid fa-calendar"></i> {props.date} {props.published}</div>
            </div>
        </div>
    )
}