import React, { useState } from 'react'
import '../../css/header/MenuHeader.css'
import '../../css/header/responsive-header/MenuResponsive.css'

export const MenuHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="container-nav" id='Home'>
        <div className="extra">
          <p>EASY</p>
          <div className="menu-hamb">
            <i className="fa-solid fa-bars hamburger" onClick={toggleMenu}></i>
            <div className={`menu-list hide ${showMenu ? 'show' : ''}`}>
              <ul className='item-wrap'>
                <a href='#Home'>Home</a>
              </ul>
              <ul className='item-wrap'>
                <a href='#Pricing'>Our Pricing</a>
              </ul>
              <ul className='item-wrap'>
                <a href='#Blog'>Blogs Post</a>
              </ul >
              <ul className='item-wrap'>
                <a href='#'>Contact Us</a>
              </ul>
            </div>
          </div>
        </div>

        <div className={`menu-list`}>
          <ul className='item-wrap'>
            <a href='#Home'>Home</a>
          </ul>
          <ul className='item-wrap'>
            <a href='#Pricing'>Our Pricing</a>
          </ul>
          <ul className='item-wrap'>
            <a href='#Blog'>Blogs Post</a>
          </ul >
          <ul className='item-wrap'>
            <a href='#'>Contact Us</a>
          </ul>
        </div>
      </nav>

    </>
  )
}



