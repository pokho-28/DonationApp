import { useState } from 'react';
import React from 'react'
import './CircularProgress.css'
import { Circle} from 'rc-progress';

function CircularProgress() {
    const [percentage,setPercentage] = useState(30);

  return (
    <div className="progress" style={{width:"28px" ,height : "28px"}}>
        <Circle percent={percentage} strokeWidth={12} strokeColor="green" trailWidth={12}/>
    </div>
  )
}

export default CircularProgress