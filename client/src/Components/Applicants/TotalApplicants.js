import React from 'react'


import { BsThreeDots } from 'react-icons/bs';

const TotalApplicants = () => {
    return (
        <div className="Totalapplicants">
            <div className="card">
                <p>Total Applications</p>
                <p className="count">7956</p>
                <p className="percent">3.59%</p>
            </div>
            <div className="progress">
                <i><BsThreeDots/></i>
                <div className="circleprogress">
                    <div className="card">
                        <div>
                            <div>
                                <svg className="svg1">
                                    <circle cx="30" cy="30" r="30" ></circle>
                                    <circle cx="30" cy="30" r="30" ></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default TotalApplicants
