import React from 'react'
import AreaChart from './AreaChart'
import "./recivedapplication.scss"
import { BsThreeDots } from 'react-icons/bs';
import { RiFolderDownloadFill } from 'react-icons/ri';
const RecivedApplication = () => {
    return (
        <div className="RecivedApplication">
            <div className="info-data">
                <div>Applications Recived</div>
                <div className="data">
                    <p>This Year</p>
                    <p>This Week</p>
                    <p>Today</p>
                    <p className="download"><i><RiFolderDownloadFill/></i>Download Report</p>
                    <BsThreeDots />
                </div>
            </div>
            <AreaChart />
        </div>
    )
}

export default RecivedApplication
