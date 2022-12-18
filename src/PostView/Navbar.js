import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <div className='logo-name'>
          <img src={require('../Images/instaclone.png')} alt='logo' />
          <span>instaclone</span>
        </div>
      </div>
      <div className="camera-icon">
        <Link to='/FormPage'>
          <img src={require('../Images/camera.png')} alt='camera' />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar