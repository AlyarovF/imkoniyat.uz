import React from 'react'

export default function Documents(props) {
    return (
        <>
            <h4>{props.title}</h4>
            <p>{props.caption}</p>
            <a href={props.document}>Скачать файл <i class="fa-solid fa-cloud-arrow-down"></i></a>
        </>
    )
}
