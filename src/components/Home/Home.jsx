import React from 'react'
import Hero from '../Hero/Hero'
import Dishes from '../Dishes/Dishes'
import Chef from '../Chef/Chef'
import Time from '../Time/Time'
import Gallery from '../Gallery/Gallery';

const Home = () => {
  return (
    <div>

    <Hero/>
    <Dishes/>
    <Chef/>
    <Time/>
    <Gallery/>
    </div>
  )
}

export default Home