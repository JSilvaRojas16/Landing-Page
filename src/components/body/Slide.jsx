import React from 'react'

export const Slide = ({img}) => {
  return (
    <div className="slide" id="slide1">
      <div className='slide-header'>
        <img src={img} />
        <div className='slide-title'>
          <p>Kaila Woodland</p>
          <span>Owner, Greendland, Inc.</span>
        </div>
      </div>

      <p className='slide-description'>
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
      </p>
    </div>
  )
}