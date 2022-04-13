import React, { Component } from 'react'
import CrContent from '../CrContent'
import SideBar from '../SideBar'
import './index.css'
import Footer from '../../../components/Footer'

export default function Statute() {
    return (
        <div className='Statute'>
            <div className='container'>
                <h1>Statute of the Association</h1>
            </div>
            <div className='About container'>
                <SideBar />
                <div className='content'>
                    <CrContent title="Описание символики (логотипа)" caption="1. GENERAL PROVISIONS.1.1. The Association of Disabled People of Uzbekistan, hereinafter referred to as the Association, is a non-governmental, non-profit public association. Established at the initiative of public organizations of persons with disabilities, with the purpose of supporting and coordinating their activities, protecting and representing the interests of their members, as well as achieving the goals and objectives set out in this Charter.1.2. The Association carries out its activities on the basis of the Constitution of the Republic of Uzbekistan, the Law On Non-profit, Non-governmental Organizations, the Law On Public Associations, the Law On Guarantees of the Activities of Non-governmental Non-profit Organizations, other legislative acts of the Republic of Uzbekistan, as well as this Charter.1.3. The Association acquires the rights of a legal entity, from the moment of its state registration, has an independent balance sheet, a round seal and an emblem with its name, settlement and other accounts in bank institutions, a corner stamp, forms, a website, and other attributes.1.4. The Association independently determines its economic and technical development activities. The Association has separate property on the right of ownership, exercises ownership, use and disposal of the property belonging to it, has rights and obligations. Acts as a plaintiff and defendant in the courts.1.5. The Association is not responsible for the obligations of its members. The members of the Association are not liable for the obligations of the Association.1.6. The Association, in accordance with its statutory objectives, has the right to carry out any activity not prohibited by law.1.7. The Association, in accordance with the legislation, may carry out economic and business activities.1.8. The Association may establish its regional branches with the status of a legal entity in the regions of the Republic of Uzbekistan. Regional branches carry out their activities after registration with the regional justice authorities and operate on the basis of this Charter, as well as the Regulations on regional branches approved by the Council and the Central Board. Regional offices carry out their activities on the territory of the respective regions at the place of registration. Regional branches are established and terminate their activities on the basis of a decision of the Council of the " />

                </div>
            </div>
            <Footer />
        </div >
    )
}
