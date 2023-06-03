import React from 'react'
import './DonationCard.css'
import cardImage from '../resources/image.webp'
import CircularProgress from './CircularProgress'
function DonationCard() {
  return (
    <div >
        <div className='donation-card'>
        <img src={cardImage} alt="image1"/>
        <div className='content'>
        <h3>Card Heading</h3>
        <div className='progress'>
        <CircularProgress />
        <span>Rs 2,00,000</span>
        </div>
        <p>Some content to show about the card</p>
        </div>
        <button className='btn'>Know More</button>
        </div>
    </div>
  )
}

export default DonationCard