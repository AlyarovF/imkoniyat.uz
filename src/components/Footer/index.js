import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <>
            <footer>
                <div className='footer'>
                    <div>
                        <p className='f__text'>{t("footer_title_1")}</p>
                    </div>
                    <div>
                        <p className='f__text'>{t("footer_title_2")}</p>
                        <Link className='s__text' to=''>{t("footer_title_3")}</Link>
                    </div>
                    <div>
                        <p className='f__text'>{t("footer_title_address")}</p>
                        <p className='s__text'>{t("footer_address")}<br />{t("footer_email")} <a href='mailto:rais-2003@mail.ru'>rais-2003@mail.ru</a></p>
                    </div>
                    <div>
                        <p className='f__text'>{t("footer_phone")}</p>
                        <p className='s__text'><a href='tel:+998977479548'>+998 97 747-95-48</a></p>
                    </div>
                    <div>
                        <p className='f__text'>{t("footer_join")}</p>
                        <div>
                            <a href='https://www.t.me/'><i class="fa-brands fa-telegram"></i></a>
                            <a href=''><i class="fa-brands fa-facebook"></i></a>
                            <a href='https://www.youtube.com'><i class="fa-brands fa-youtube"></i></a>
                            <a href=''><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <img src={require("../../assets/oscelogo.png")} alt='escelogo' />
            </footer>
        </>
    )
}