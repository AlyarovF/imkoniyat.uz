import React from 'react'
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
            <h3><a href={props.url}>
                {props.title}
            </a></h3>
            <div className='date'>
                <div><i class="fa-solid fa-eye"></i> {props.views}</div>
                <div><i class="fa-solid fa-calendar"></i> {props.date} {props.published}</div>
            </div>
        </div>
    )
}