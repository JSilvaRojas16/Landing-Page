import React from 'react'
// import '../../css/body/Owner.css'
import '../../../css/body/Testimonial/Owner.css'

import { Slider } from './Slider'


export const Owner = () => {
  return (
    <section className='container-owner'>
      <div className ='owner-text'>
        <p>JOIN NOW</p>
        <h2>Join More Than 90,000+ Amazing People Loves Our Product</h2>
        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
        <button>Product Tour</button>
      </div>

      <Slider/>
    </section>
  )
}
