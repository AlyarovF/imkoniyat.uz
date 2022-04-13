import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className='footer'>
                        <div>
                            <p className='f__text'>© 2021 «Ассоциация инвалидов Узбекистана»</p>
                        </div>
                        <div>
                            <p className='f__text'>Версия для слабовидящих</p>
                            <Link className='s__text' to=''>Пользовательское соглашение</Link>
                        </div>
                        <div>
                            <p className='f__text'>Адрес:</p>
                            <p className='s__text'>г. Ташкент, улица Шарафобод, дом 5.<br />E-mail: <a href='mailto:rais-2003@mail.ru'>rais-2003@mail.ru</a></p>
                        </div>
                        <div>
                            <p className='f__text'>Телефон</p>
                            <p className='s__text'><a href='tel:+998977479548'>+998 97 747-95-48</a></p>
                        </div>
                        <div>
                            <p className='f__text'>Присоединиться</p>
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
}