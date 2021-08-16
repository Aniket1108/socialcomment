import React from 'react'
import "./applicants.scss"
import { BsThreeDots } from 'react-icons/bs';

const Shortlisted = () => {
    return (
        <div className="shortlisted">
            <div className="card-body">
                <div className="card">
                    <p>Shortlisted Candidates</p>
                    <p className="count">7956</p>
                    <p className="percent">3.59%</p>
                </div>
                <div className="progress">
                    <i><BsThreeDots /></i>
                    <div className="circleprogress">
                        <div className="card">
                            <div>
                                <div>
                                    <svg className="svg2">
                                        <circle cx="30" cy="30" r="30" ></circle>
                                        <circle cx="30" cy="30" r="30" ></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Shortlisted
