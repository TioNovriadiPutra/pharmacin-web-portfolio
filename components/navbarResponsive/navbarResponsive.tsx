import React,{ useState } from 'react'
import style from './navbar.module.css'

const NavbarResponsive = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className= {style.navbar}>
      <div className= {style.container}>
        <div className="logo">
        </div>
        <div className={style.menu_icon} onClick={handleShowNavbar}>
        ☰
        </div>
        <div className={`${style.nav_elements}  ${showNavbar ? style.active : ''}`}>
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