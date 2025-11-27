import React from 'react';
import styles from "./about.module.scss"
import AboutBanner from '@/Common/Components/AboutBanner/AboutBanner';
import AboutContent from '../AboutContent/AboutContent';


const About = () => {
    const bannerData = [{
        id:1,
        route:"",
        routeText:"About Us"
    }]
  return (
    <>
      <AboutBanner banner={bannerData} heading={"About Us – Your Trusted Travel Booking Platform"}/>
      <AboutContent />
    </>
  )
}

export default About
