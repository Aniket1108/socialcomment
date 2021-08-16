import React from 'react'
import "./sidebar.scss"

import { FaReact } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { SidebarLinks } from './SidebarLinks';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="icon react"><FaReact /></div>
            <div className="sidebar-list">
                <div className="links">
                    {SidebarLinks.map((props) => {
                        return (
                            <div className="icon">{props.icon}</div>
                        )
                    })}
                </div>
                <div className="icon">
                    <FiSettings/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
