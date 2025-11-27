import React from 'react';
import styles from "./aboutContent.module.scss"

const AboutContent = () => {
  return (
    <section className={styles?.aboutContent}>
      <div className={"container"}>
        <p className={styles?.aboutContentP}>
        Welcome to AbhimaniTrip, your trusted destination for seamless flight booking, premium hotel stays, and curated holiday experiences. We combine smart technology with expert travel knowledge to help you book flights, hotels, and holiday packages with comfort, confidence, and transparency. With real-time availability, competitive fares, secure bookings, and trusted recommendations, we ensure every journey is smooth, convenient, and memorable.
        </p>
        <br/>
        <br/>
        <p className={styles?.aboutContentP}>
        At AbhimaniTrip, we believe travel should be effortless and inspiring. Whether you're planning a quick getaway, a family vacation, or a luxury holiday, we aim to offer beautifully curated and easy-to-book travel experiences. Discover the world with ease, book with trust, and enjoy a premium travel journey with AbhimaniTrip.
        </p>
      </div>
    </section>
  )
}

export default AboutContent
