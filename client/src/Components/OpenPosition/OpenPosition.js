import React from 'react'
import Piechart from './PieChart'
import "./openposition.scss"


import { BsThreeDots } from 'react-icons/bs';


const OpenPosition = () => {
  return (
    <div className="OpenPosition">
      <span>Open Positions</span>
      <div className="position">
        <p>Open Positions By Department</p>
        <i><BsThreeDots /></i>
      </div>
      <Piechart />
    </div>
  )
}

export default OpenPosition
