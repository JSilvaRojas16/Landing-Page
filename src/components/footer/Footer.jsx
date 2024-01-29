import React from 'react'
// import '../../css/Footer/footer.css'
import '../../css/Footer/footer.css'

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="footer-one">
        <div className="footer-text">
          <p>Connect with us:</p>
        </div>
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      <div className='footer-two'>
        <p>This landing-page is made thanks to the template Colorlib obtained from: </p>
        <a href='https://preview.colorlib.com/theme/easy/index.html'>https://preview.colorlib.com/theme/easy/index.html</a>
      </div>
    </footer>
  )
}
