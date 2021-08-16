import React from 'react'


import "../Components/dashboard.scss"
import Header from '../Components/Header/Header'
import TotalApplicants from '../Components/Applicants/TotalApplicants'
import Sidebar from "../Components/Sidebar/Sidebar"
import Shortlisted from '../Components/Applicants/Shortlisted'
import Application from '../Components/Applicants/Application'
import NewApplicants from '../Components/NewApplicants/NewApplicants'
import OpenPosition from '../Components/OpenPosition/OpenPosition';
import RecivedApplication from '../Components/RecivedApplication/RecivedApplication'
import StatusApplication from '../Components/StatusApplication/StatusApplication'
import Referrals from '../Components/Referrals/Referrals'

const Dashboard = () => {


    
 
    return (

        <div className="Dashboard">
            <Sidebar />
            <div className="main">
                <Header />
                <div className="division">
                    <div className="left-section">
                        <div className="First-Row">
                            <TotalApplicants />
                            <Shortlisted />
                            <Application />
                        </div>
                        <div className="Second-Row">
                            <RecivedApplication />
                            <StatusApplication />
                        </div>
                        <div className="Third-Row">
                            <Referrals />
                            <OpenPosition />
                        </div>
                    </div>


                    <NewApplicants />
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
