import React from 'react'
import "./applicants.scss"
import Progress from "./progress"

import { BsThreeDots } from 'react-icons/bs';

const Application = () => {
    return (
        <div className="Application">
            <div className="card">
                <p>Total Applications</p>
                <p className="count">7956</p>
                <p className="percent">3.59%</p>
            </div>
            <div className="progress">
                <i><BsThreeDots /></i>
                <div className="circleprogress">
                    <div className="card">
                        <div>
                            <div>
                                <svg className="svg3">
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

export default Application
