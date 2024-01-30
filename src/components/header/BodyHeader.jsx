import React from 'react'
import heroImage from '../../img/hero_img.png';
import adobe from '../../img/logo-adobe.png';
import google from '../../img/logo-google.png';
import paypal from '../../img/logo-paypal.png';
import puma from '../../img/logo-puma.png';

import '../../css/header/BodyHeader.css'
import '../../css/header/responsive-header/BodyResposive.css'

export const BodyHeader = () => {
  return (
    <>
      <div className='container-body-all'>
        <div className='container-body'>
          <div className='body-text'>
            <h1>Get Paid Easily <br></br>without Hassle</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live</p>
            <form action="#" className="sign-up-form d-flex aos-init aos-animate conatiner-form" data-aos="fade-up" data-aos-delay="200">
              <input type="text" className="form-control input-text" placeholder="Enter email address" />
              <input type="submit" className="btn btn-primary input-buttom" value="Sign up" />
            </form>

          </div>

          <img src={heroImage} className='body-imagen' />
        </div>

        <div className='container-logos'>
          <img src={puma} className='logo-img' />
          <img src={adobe} className='logo-img' />
          <img src={google} className='logo-img' />
          <img src={paypal} className='logo-img' />
        </div>
      </div>
    </>
  )
}
