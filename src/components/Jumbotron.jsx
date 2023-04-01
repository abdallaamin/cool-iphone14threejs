import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'


const Jumbotron = () => {

  const handleLearnMore =() => {
    const element = document.querySelector('.sound-section')
    window.scrollTo({
      top : element?.getBoundingClientRect().top ,
      left : 0 ,
      behavior : 'smooth'
    })
  }

  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
      <img className='logo' src={Iphone} alt="iphone 14 pro"/>
      <p className='text'>Big and bigger</p>
      <span className='description'>
            From $40/mo , for 24 mo, or $999 before trade-in. <br/>
      </span>
      <ul className='links'>
        <li >
            <button className='button'>buy</button>
        </li>
        <li >
          <a className='link' onClick={handleLearnMore}>Learn more </a>
        </li>
      </ul>
      <img  className='iphone-img' src={HoldingIphone} alt="holding iphone" />

    </div>
  )
}

export default Jumbotron