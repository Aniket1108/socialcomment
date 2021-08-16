import React from 'react'
import TodaysDate from './TodaysDate'
import "./header.scss"


import { BsFillBellFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import userimg from "../../img/userimg.jpeg"


const Header = () => {

    return (
        <div className="header">
            <div className="left">
                <h2>Dashboard</h2>
                <p><TodaysDate /></p>
            </div>
            <div className="right">
                <div className="user-info">
                    <i><BsFillBellFill /></i>
                    <p className="user-name"> John Bayer </p>
                    <img src={userimg} alt="userpicture" />
                    <i><IoIosArrowDown /></i>
                </div>

                <div className="add-section">
                    <button className="addbtn"><AiOutlinePlus />  Add </button>
                    <i><AiOutlineSearch /></i>
                    <input type="text" className="search" placeholder="Search for Application here" />

                </div>
            </div>
        </div>
    )
}

export default Header
