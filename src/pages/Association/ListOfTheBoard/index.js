import React, { Component } from 'react'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'

export default function ListOfTheBoard() {
    return (
        <div className='ListOfTheBoard'>
            <div className='container'>
                <h1>LIST OF THE BOARD OF THE ASSOCIATION OF DISABLED PEOPLE OF UZBEKISTAN</h1>
            </div>
            <div className='ListOfTheBoard-js container'>
                <SideBar />
                <div className='content'>
                    <h3 style={{ textAlign: "center" }}>APPROVED BY THE DECISION OF THE CONFERENCE OF<br />THE ASSOCIATION OF DISABLED PEOPLE OF UZBEKISTAN ON MARCH 27, 2018</h3>
                    <img src={require('../../../assets/listoftheboard.jpg')} width="100%" />
                </div>
            </div>
            <Footer />
        </div >
    )
}
