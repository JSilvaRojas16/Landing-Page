import React from 'react'
import { MenuHeader } from './MenuHeader'
import { BodyHeader } from './BodyHeader'

export const MainHeader = () => {
  return (
    <header className='container-all'>
      <MenuHeader/>
      <BodyHeader/>
    </header>
  )
}
