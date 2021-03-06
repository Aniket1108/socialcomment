import React from 'react'
import "./applicants.scss"
import { BsThreeDots } from 'react-icons/bs';
import { ImArrowUpRight } from 'react-icons/im';

const Shortlisted = () => {
    return (
        <div className="shortlisted">
            <div className="card-body">
                <div className="card">
                    <p>Shortlisted Candidates</p>
                    <p className="count">4658</p>
                    <p className="percent"><ImArrowUpRight/>0.6%</p>
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
