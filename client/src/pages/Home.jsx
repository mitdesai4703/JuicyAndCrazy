import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import LatestProduct from '../components/Home/LatestProduct'
import DeliveryBanner from '../components/Home/DeliveryBanner'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Testimonials from '../components/Home/Testimonials'
import NewsletterCTA from '../components/Home/NewsLetterCTA'


const Home = () => {
  return (
    <div className='mt-10'>
    <HeroSection/>
    <LatestProduct/>
    <DeliveryBanner/>
    <WhyChooseUs/>
    <Testimonials/>
    <NewsletterCTA/>


    </div>
  )
}

export default Home
