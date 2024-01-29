import React from 'react'
// import '../../css/body/RowPricing.css'
import '../../../css/body/Pricing/RowPricing.css'

export const RowPricing = ({isYearly}) => {
  const rowsPrincing = [
    { id: 1,title: 'Personal', pricePerMonth: '$29', timeMonth: 'Month', pricePerYear: '$299', timeYear: 'Year' },
    { id: 2,title: 'Enterprise', pricePerMonth: '$49', timeMonth: 'Month', pricePerYear: '$599', timeYear: 'Year' },
    { id: 3,title: 'Premium/Pro', pricePerMonth: '$99', timeMonth: 'Month', pricePerYear: '$1999', timeYear: 'Year' }
  ]

  return (
    <div className='colections-plan'>
      
      {rowsPrincing.map((e) => {
          const style = e.id % 2 !== 0 ? 'par' : ''; 
          if(!isYearly){
            return <Rows key={e.id} title={e.title} price={e.pricePerMonth} time={e.timeMonth} style={style}></Rows>
          }else{
            return <Rows key={e.id} title={e.title} price={e.pricePerYear} time={e.timeYear} style={style}></Rows>
          }

        
      })}

    </div>
  )
}

const Rows = ({title,price,time,style}) => {
  return (
    <div className={`container-row ${style}`}>
      <h2>{title}</h2>
      <p className='p-descripcion'>Far far away, behind the word mountains</p>
      <hr className='line' />
      <h2 className='price'>{price}</h2>
      <p className='time'>Per {time}</p>
      <ul>
        <li>Far far away, behind the word mountains far from the countries </li>
        <li>Far far away, behind the word mountains far from the countries</li>
      </ul>
      <button type="button">Get Started</button>
    </div>
  )
}