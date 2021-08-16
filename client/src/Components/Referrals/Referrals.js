import React from 'react'
import "./referrals.scss"

import { RiSendPlaneFill } from 'react-icons/ri';
import { ImArrowUpRight } from 'react-icons/im';


const Referrals = () => {
    return (
        <div className="Referrals">
            <div className="top">
                <div className="title">
                    Referrals and Campaign Stats
                </div>
                <div className="stats">
                    <i><RiSendPlaneFill /></i>
                    <div>
                        <p className="highlight">40 Campaigns sent in total</p>
                        <p>4 Campaigns sent in last month</p>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="status">
                    <div>User Reached</div>
                    <p className="highlight"><ImArrowUpRight />  3.59%</p>
                    <div>7956</div>
                </div>
                <div className="seperator">

                </div>
                <div className="status">
                    <div>Referrals</div>
                    <p className="highlight"><ImArrowUpRight />  9.01%</p>
                    <div>0662</div>
                </div>
                <div className="seperator"></div>
                <div className="status">
                    <div>Shares</div>
                    <p className="highlight"><ImArrowUpRight />  39.18%</p>
                    <div>1478</div>
                </div>
                <div className="seperator"></div>
                <div className="status">
                    <div>Applications</div>
                    <p className="highlight"><ImArrowUpRight />  12.00%</p>
                    <div>0564</div>
                </div>
            </div>
            <div className="bottom">
                <button className="new">Start a New Campaign Now</button>
                <button className="pause">Pause All Running Campaigns</button>
            </div>
        </div>
    )
}

export default Referrals
