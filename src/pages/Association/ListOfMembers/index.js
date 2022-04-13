import React, { Component } from 'react'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'

export default function ListOfMembers() {
    return (
        <div className='ListOfMembers'>
            <div className='container'>
                <h1>LIST OF MEMBERS OF THE ASSOCIATION OF DISABLED PEOPLE OF UZBEKISTAN</h1>
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
