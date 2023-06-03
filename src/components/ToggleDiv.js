import React from 'react'

function ToggleDiv(props) {
  return (
    <div className='signup'>
            <h1>{props.heading}</h1>
            <p>{props.question}</p>
            <button className='signup_btn' onClick={props.onClickHandler}>{props.buttonLabel}</button>
        </div>
  )
}

export default ToggleDiv