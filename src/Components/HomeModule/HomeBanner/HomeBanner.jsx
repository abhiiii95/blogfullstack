import React from 'react';
import styles from "./homeBanner.module.scss";
import banner from "../../../../public/images/small-banner.webp";
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <section className={styles?.HomeBanner}>
      <div className={"container"}>
        <div className={styles?.content}>
            <h1>Find the Best Weekend Getaways & Travel Ideas Across India</h1>
            {/* <p>Explore curated weekend destinations, budget trips, and simple itineraries that make planning your next getaway effortless.</p> */}
        </div>
      </div>
      <div className={styles?.banner}>
        <Image src={banner} alt="Home Banner" fetchPriority='high' fill />
      </div>
    </section>
  )
}

export default HomeBanner
