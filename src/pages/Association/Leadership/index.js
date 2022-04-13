import React, { Component } from 'react'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'
import LeaderPerson from '../LeaderPerson'

export default function Leadership() {
    return (
        <div className='Leadership'>
            <div className='container'>
                <h1>Leadership of Association</h1>
            </div>
            <div className='Leadership-js container'>
                <SideBar />
                <div className='content'>
                    <LeaderPerson src="https://www.popliklar.uz/upload/iblock/06e/top11.jpg" who="Chairperson of the Association" fullname="Isakov Oybek Yusufbekovich" url="https://www.popliklar.uz/eng/rukovodstvo/1/" />
                    <LeaderPerson src="https://www.popliklar.uz/upload/iblock/06e/top11.jpg" who="Chairperson of the Association" fullname="Isakov Oybek Yusufbekovich" url="https://www.popliklar.uz/eng/rukovodstvo/1/" />
                    <LeaderPerson src="https://www.popliklar.uz/upload/iblock/06e/top11.jpg" who="Chairperson of the Association" fullname="Isakov Oybek Yusufbekovich" url="https://www.popliklar.uz/eng/rukovodstvo/1/" />
                    <LeaderPerson src="https://www.popliklar.uz/upload/iblock/06e/top11.jpg" who="Chairperson of the Association" fullname="Isakov Oybek Yusufbekovich" url="https://www.popliklar.uz/eng/rukovodstvo/1/" />
                </div>
            </div>
            <Footer />
        </div >
    )
}
