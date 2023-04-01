import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className='nav-wrapper '>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                <img src={Logo} alt ="apple"/>
                </li>
                <li>
                    <a className='link-styled'>Store</a>
                </li>
                <li>
                    <a className='link-styled'>Mac</a>
                </li>
                <li>
                    <a className='link-styled'>iPad</a>
                </li>
                <li>
                    <a className='link-styled'>iphone</a>
                </li>
                <li>
                    <a className='link-styled'>watch</a>
                </li>
                <li>
                    <img src={Search} alt="search"/>
                </li>
                <li>
                    <img src={Store} alt="store"/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav