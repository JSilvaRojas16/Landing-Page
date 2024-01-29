import React from 'react'
// import '../../css/body/ChangingApp.css'
import '../../../css/body/Changing-App/ChangingApp.css'


export const ChangingApp = ({ img, left }) => {
  return (
    left ? (
      <section className='container-all-changing' >
        <div className='container-changing'>
          <p>LIFE CHANGING APP</p>
          <h2>Far far away, behind the word mountains</h2>
          <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</span>
          <button>Product Tour</button>

        </div>
        <img src={img} />
      </section >) : (
      <section className='container-all-changing' >
        <img src={img} />
        <div className='container-changing'>
          <p>LIFE CHANGING APP</p>
          <h2>Far far away, behind the word mountains</h2>
          <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</span>
          <button>Product Tour</button>
        </div>
      </section >
    )
  )
}

