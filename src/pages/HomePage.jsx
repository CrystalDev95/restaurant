import React from 'react'
import Navbar from '../components/Navbar'
import { Hero, About, Slide, Values, Footer } from '../components'
import { heroapi, aboutapi, menu, stories, values, contact} from '../../src/data/Data.jsx'

const HomePage = () => {
  return (
    <main>
      <Navbar heroapi={heroapi} />
      <Hero heroapi={heroapi} />
      <About aboutapi={aboutapi} />
      <Slide endpoint={menu}  />
      <Slide endpoint={stories} ifExists />
      <Values values={values} />
      <Footer contact={contact} />
    </main>
  )
}

export default HomePage