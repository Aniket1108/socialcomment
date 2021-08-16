import React, { useState } from 'react'
import "./newapplicants.scss"
import { ImArrowLeft } from 'react-icons/im';
import { BiUserCircle } from 'react-icons/bi';
import { MdCall } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { ApplicationData } from './ApplicationData';

import cartoonimg from "../../img/usercartoon.PNG"

const NewApplicants = () => {


    const [applicant, setApplicant] = useState(false)

    return (
        <div >
            <div onClick={() => { setApplicant(!applicant) }} className="arrowsec"><ImArrowLeft /></div>
            
            { applicant && <div className="New-applicants">
            <div onClick={() => { setApplicant(!applicant) }} className="arrow"><ImArrowLeft /></div>
                <h4 className="title">Hello John Bayer, <br></br> You have 8 new application today.</h4>
                <div> <img src={cartoonimg} alt="" /> </div>
                <div className="application-data">
                    {ApplicationData.map((props) => {
                        return (
                            <div className="card">
                                <i className="icon left"><BiUserCircle /></i>
                                <div className="user-info">
                                    <h3>{props.name}</h3>
                                    <p>Applied for <span>{props.appliedFor}</span></p>
                                </div>
                                <i className="icon right"><AiFillMessage /></i>
                                <i className="icon right"><MdCall /></i>
                            </div>
                        )
                    })

                    }
                </div>

            </div>}
        </div>
    )
}
export default NewApplicants
