import React, { Component } from 'react'
import CrContent from '../CrContent'
import SideBar from './SideBar'
import './index.css'
import Footer from '../../../components/Footer'

export default function Seminars() {
    return (
        <div className='Seminars-js'>
            <div className='heading'>
                <div className='container'>
                    <div className='text'>
                        <h1>Семинары и конференции</h1>
                        <h3>В целях объединения усилий и координации действий общественных организации инвалидов в вопросах создание инклюзивного общества, а также имплементации Конвенции ООН «О правах инвалидов», по инициативе общественных объединений инвалидов 21 февраля 2018 года была создана и зарегистрирована Ассоциация инвалидов Узбекистана.</h3>
                    </div>
                </div>
            </div>
            <div className='Seminars container'>
                <SideBar />
                <div className='content'>
                    <CrContent mediatype="image" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Registan_Samarkand_Timurid_Renaissance.jpg" title="Самарканд" caption="Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео." />
                    <CrContent mediatype="image" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Registan_Samarkand_Timurid_Renaissance.jpg" title="Самарканд" caption="Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео." />
                    <CrContent mediatype="image" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Registan_Samarkand_Timurid_Renaissance.jpg" title="Самарканд" caption="Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео." />
                    <CrContent mediatype="image" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Registan_Samarkand_Timurid_Renaissance.jpg" title="Самарканд" caption="Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео. Описание к видео." />
                </div>
            </div>
            <Footer />
        </div>
    )
}
