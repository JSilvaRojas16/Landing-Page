import React, { useState } from 'react'
import { FeatureCard } from './FeatureCard'
import uno from '../../../img/icon/001-stats.svg'
import dos from '../../../img/icon/002-coins.svg'
import tres  from '../../../img/icon/003-gold-ingots.svg'
import cuatro from '../../../img/icon/004-notebook.svg'
import cinco  from '../../../img/icon/005-brochure.svg'
import seis from '../../../img/icon/006-garage.svg'
// import '../../css/body/Feature/Features.css'
import '../../../css/body/Feature/Features.css'


export const Features = () => {


  const [metaData, setMetaData] = useState([
    { id: 1, img: uno, title: 'Cash Collection' },
    { id: 2, img: dos, title: 'Analytics' },
    { id: 3, img: tres, title: 'Payment' },
    { id: 4, img: cuatro, title: 'Cash Collection' },
    { id: 5, img: cinco, title: 'Analytics' },
    { id: 6, img: seis, title: 'Payment' },
  ])

  return (
    <>
      <section className='container-features'>
        <p className='title-p'>AWESOME FEATURES</p>
        <h2>Cool Features</h2>
        <p className='text-p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <div className='container-card'>
          {metaData.map((e) => {
            return <FeatureCard key={e.id} img={e.img} title={e.title}></FeatureCard>
          })}
        </div>
      </section>
    </>
  )
}
