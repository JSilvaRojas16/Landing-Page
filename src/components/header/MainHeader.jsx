import React from 'react'
import { MenuHeader } from './MenuHeader'
import { BodyHeader } from './BodyHeader'
import '../../css/header/responsive-header/BodyResposive.css'

export const MainHeader = () => {
  return (
    <header className='container-all'>
      <MenuHeader/>
      <BodyHeader/>
    </header>
  )
}
