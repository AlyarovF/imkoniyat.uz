import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Interweave } from 'interweave'

export default function LeaderPerson(props) {
    const { t } = useTranslation()
    return (
        <div className='leader-person'>
            <div className='thumb'>
                <img src={props.src} width="220" height="305" alt='leader' />
            </div>
            <div className='text-person'>
                <h3>{props.who}</h3>
                <h2>{props.fullname}</h2>
                <Interweave content={props.caption} />
                {/* <Link className='biography' to={props.url}><span>{t("leadership_bio")}</span></Link> */}
            </div>
        </div>
    )
}
