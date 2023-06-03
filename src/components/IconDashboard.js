import React from 'react'
import './IconDashboard.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandHoldingHeart,faHandsHoldingChild,faHandSparkles} from "@fortawesome/free-solid-svg-icons"; 
function IconDashboard() {
  return (
    <div className='App'> <FontAwesomeIcon  className="iconItem" icon={faHandHoldingHeart} style={{color : "white"}}/>
    <FontAwesomeIcon className="iconItem" icon={faHandsHoldingChild} style={{color : "white"}}/>
    <FontAwesomeIcon className="iconItem" icon={faHandSparkles} style={{color : "white"}}/>
    <p>Generosity is not about how much you give, but how much love you put into giving</p>
    <p>Adoption is the beautiful tapestry that weaves hearts together, creating a forever family</p>
    <p>Volunteering is the art of giving oneself and painting a brighter world with acts of kindness</p></div>
  )
}

export default IconDashboard