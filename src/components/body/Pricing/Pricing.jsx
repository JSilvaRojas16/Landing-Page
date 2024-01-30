import React,{useState} from 'react'
import { RowPricing } from './RowPricing'
import '../../../css/body/Pricing/PricingOne.css'

export const Pricing = () => {
  const [isYearly,setIsYearly] = useState(false)

  const handleSwitchChange = () => {
    setIsYearly(!isYearly)
  }
  return (
    <section className='container-pricing' id='Pricing'>
      <div className="header-Pricing">
        <p>PRICING FOR EVERYONE</p>
        <h2>Our Pricing</h2>
      </div>

      <div className="switch-plan">
        <p>Monthly</p>
        
        <label className="switch">
          <input type="checkbox" onChange={handleSwitchChange} checked={isYearly}/>
          <span className="circulo round"></span>
        </label>

        <p>Yearly</p>
        <span className='Save'>Save 25%</span>
      </div>

      <RowPricing isYearly={isYearly}/>
    </section>
  )
}



