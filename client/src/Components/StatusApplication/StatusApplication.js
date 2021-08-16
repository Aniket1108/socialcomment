import React from 'react'
import "./statusapplication.scss"

import {GoPrimitiveDot} from "react-icons/go"
 
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				
			</div>
		</div>
	)
} 



const StatusApplication = () => {
    return (
        <div className="StatusApplication">
            <p className="title">Total Application</p>
            <div className="bar white"><GoPrimitiveDot /> <p>Applications</p> <Progress done="70"/></div>
            <div className="bar blue"><GoPrimitiveDot /> <p>Applications</p> <Progress done="70"/></div>
            <div className="bar red"><GoPrimitiveDot /> <p>Applications</p> <Progress done="70"/></div>
            <div className="bar smoke"><GoPrimitiveDot /> <p>Applications</p> <Progress done="70"/></div>
            <div className="bar purple"><GoPrimitiveDot /> <p>Applications</p> <Progress done="70"/></div>
        </div>
    )
}

export default StatusApplication
