import React, { Component } from 'react'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import { useTranslation } from 'react-i18next'

export default function ListOfMembers() {
    const { t } = useTranslation()
    return (
        <div className='ListOfMembers'>
            <div className='container'>
                <h1>{t("listofmembers_title")}</h1>
            </div>
            <div className='ListOfMembers-js container'>
                <SideBar />
                <div className='content'>
                    <img src={require('../../../assets/listofmembers.jpg')} width="100%" />
                </div>
            </div>
            <Footer />
        </div >
    )
}
