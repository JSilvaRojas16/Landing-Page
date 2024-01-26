import React from 'react'

export const FeatureCard = ({img,title}) => {
  return (
    <div className='card'>
      <span>
        <img src={img}  />
      </span>
      <p className='title-card'>{title}</p>
      <p className='card-text'>Manage your invoces from creation to payment. With Upflow you'll collect 100% of.</p>
    </div>
  )
}
