import React from 'react';
import styles from "./contact.module.scss";
import AboutBanner from '@/Common/Components/AboutBanner/AboutBanner';
import Image from 'next/image';
import contact from "../../../../public/images/contact.webp"
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    const bannerData = [
        {
            id:1,
            route:"/contact",
            routeText:"Contact Us"
        }
    ]
  return (
    <>
      <AboutBanner banner={bannerData} heading={"Contact Us – Get in Touch with Our Travel Experts"}/>
      <section className={styles?.contact}>
        <div className='container'>

        <div className={styles?.content}>
            <div className={styles?.leftContent}>
                <p className={styles?.helpText}>We’re here to help! Whether you have questions about flight bookings, hotel reservations, or holiday packages, our dedicated travel experts are just a message away.</p>
                <ContactForm />
            </div>
        <div className={styles?.imageWrapper}>
            <Image src={contact} alt="contact" fill />
        </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Contact
