import React from 'react'
import { useTranslation } from 'react-i18next'
import { Interweave } from 'interweave'


export default function Documents(props) {
    const { t } = useTranslation()
    return (
        <>
            <h4>{props.title}</h4>
            <Interweave content={props.caption} />
            <a className='download_button' href={props.document}>{t("library_download")} <i class="fa-solid fa-cloud-arrow-down"></i></a>
        </>
    )
}
