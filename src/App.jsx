import './App.css'
import { MainHeader } from './components/header/MainHeader'
import { Features } from './components/body/Feature/Features'
import { Owner } from './components/body/Testimonial/Owner'
import { ChangingApp } from './components/body/ChanginApp/ChangingApp'
import { Pricing } from './components/body/Pricing/Pricing'
import { Blog } from './components/body/Blog/Blog'
import { Footer } from './components/footer/Footer'

import make from './img/undraw_make_it_rain_iwk4.svg'
import wallet from './img/undraw_wallet_aym5.svg'

function App() {

  return (
    <>
      <MainHeader />
      <Features />
      <Owner />
      <ChangingApp img={make} left={true} />
      <ChangingApp img={wallet} left={false} />
      <Pricing />
      <Blog />
      <Footer />
    </>
  )
}

export default App
