import React from 'react'
import '../../css/header/MenuHeader.css'

export const MenuHeader = () => {
  return (
    <>
      <nav className="container-nav">
        <div className='sub-container'>
          <li>
            <a href='#' className='item'>Easy</a>
          </li>
          <li>
            <a href='#' className='item active'>Home</a>
          </li>
          <li className="nav-item dropdown">
            <a href='#' className='item dropdown-toggle' role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu One</a></li>
              <li><a className="dropdown-item" href="#">Menu Two</a></li>
              <li><a className="dropdown-item" href="#">Menu Three</a></li>
            </ul>
          </li>
          <li>
            <a href='#' className='item'>Inner Page</a>
          </li>
          <li>
            <a href='#' className='item'>Contact Us</a>
          </li>

        </div>
      </nav>

    </>
  )
}