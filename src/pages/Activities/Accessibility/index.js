import React, { Component } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'

export default function Accessibility() {
    return (
        <div className='Accessibility-js'>
            <div className='heading'>
                <div className='container'>
                    <div className='text'>
                        <h1>Accessibility</h1>
                        <h3>Since the very beginning of organizations that unite people with disabilities, one of the main tasks of their activities has been the struggle for barrier-free infrastructure. After all, without ensuring architectural accessibility, it is impossible to achieve the realization of their rights to education, work and just a full life. But few people, even from representatives of organizations of disabled people, will be able to explain point-by-point what an accessible environment is, who is interested in creating it, and how it can be done.</h3>
                    </div>
                </div>
            </div>
            <div className='Accessibility container'>
                <div className='content'>
                    <CrContent mediatype="image" src="https://picsum.photos/2000/1000" title="Описание символики (логотипа)" caption="Ассоциация инвалидов Узбекистана является уникальной организацией так как объединяет 28 общественных объединений представляющих инвалидов всех форм и видов во всём их разнообразии (кросс-инвалидность), это в свою очередь позволяет в деятельности Ассоциации учитывать многообразные интересы всех категорий лиц с инвалидностью, а также их организации." />
                    <CrContent mediatype="youtube" src="x7VS6qdF9X4" title="Описание символики (логотипа)" caption="Ассоциация инвалидов Узбекистана является уникальной организацией так как объединяет 28 общественных объединений представляющих инвалидов всех форм и видов во всём их разнообразии (кросс-инвалидность), это в свою очередь позволяет в деятельности Ассоциации учитывать многообразные интересы всех категорий лиц с инвалидностью, а также их организации." />
                </div>
            </div>
            <Footer />
        </div>
    )
}
