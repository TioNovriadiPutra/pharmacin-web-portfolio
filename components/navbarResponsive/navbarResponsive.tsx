import React,{ useState } from 'react'
import style from './navbar.module.css'

const NavbarResponsive = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className= {style.navbar}>
      <div className="container">
        <div className="logo">
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        ☰
        </div>
        <div className={`div-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a >Home</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarResponsive