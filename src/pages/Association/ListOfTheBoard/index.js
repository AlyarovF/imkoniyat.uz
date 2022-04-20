import React, { Component } from 'react'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'

export default function ListOfTheBoard() {
    const { t } = useTranslation()
    return (
        <div className='ListOfTheBoard'>
            <div className='container'>
                <h1>{t("listoftheboard_title")}</h1>
            </div>
            <div className='ListOfTheBoard-js container'>
                <SideBar />
                <div className='content'>
                    <h3 style={{ textAlign: "center" }}>{t("listoftheboard_caption")}</h3>
                    <img src={require('../../../assets/listoftheboard.jpg')} width="100%" />
                </div>
            </div>
            <Footer />
        </div >
    )
}
