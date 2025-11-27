import React from 'react';
import styles from "./termsConditions.module.scss";
import AboutBanner from '@/Common/Components/AboutBanner/AboutBanner';

const TermsConditions = () => {
    const bannerData = [
        {
            id:1,
            route:"/terms",
            routeText:"Terms Conditions"
        }
    ]
  return (
    <>
      <AboutBanner banner={bannerData} heading={"Terms and Conditions – Online Travel Booking Policies"}/>
      <section className={styles?.termsWrapper}>
        <div className='container'>
            <div className={styles?.content}>
                <h2>
                Terms and Conditions
                </h2>
                <p>
                Welcome to our travel booking platform. By accessing or using our website and services, including flight bookings, hotel reservations, and holiday packages, you agree to comply with the following Terms and Conditions. Please read them carefully.
                </p>
                <h5>
                1. General Use
                </h5>
               <ul>
                <li>
                Users must be at least 18 years old or have the consent of a legal guardian to use the platform.
                </li>
                <li>
                All content on the website, including travel information, images, and pricing, is for informational purposes and may change without notice.
                </li>
               </ul>
               <h5>
               2. Booking and Payments
               </h5>
               <ul>
                    <li>
                    All bookings for flights, hotels, and holiday packages are subject to availability.
                    </li>
                    <li>
                    Payment must be made through the provided secure payment methods.
                    </li>
                    <li>
                    Prices and offers may change and are subject to the terms and conditions of the respective airlines, hotels, and service providers.
                    </li>
               </ul>
               <h5>
               3. Cancellations and Refunds
               </h5>
               <p>
               Cancellation and refund policies depend on the specific supplier (airlines, hotels, or travel operators).
               </p>
               <p>
               Users must check individual booking policies before confirming a reservation.
               </p>
               <p>
               The platform is not responsible for fees, penalties, or charges imposed by third-party providers.
               </p>
               <h5>
               4. Liability
               </h5>
               <ul>
                <li>
                We act as an intermediary between the user and travel service providers.
                </li>
                <li>
                We are not responsible for delays, cancellations, or issues caused by airlines, hotels, or third-party service providers.
                </li>
                <li>
                Users agree to use the platform at their own risk.
                </li>
               </ul>
               <h5>
               5. User Obligations
               </h5>
               <p>
               Users must provide accurate information while making bookings.
               </p>
               <p>
               Users must comply with all local laws, airline regulations, and hotel rules.
               </p>
               <h5>
               6. Privacy
               </h5>
               <ul>

               <li>
               Personal data is collected, stored, and processed according to our Privacy Policy.
               </li>
               <li>
               Users consent to the use of their information for booking, communication, and service improvement purposes.
               </li>
               </ul>
               <h5>
               7. Modifications
               </h5>
               <ul>
                <li>
                We reserve the right to modify these Terms and Conditions at any time.
                </li>
                <li>
Continued use of the platform constitutes acceptance of the updated terms.
                </li>
               </ul>
            
            </div>
        </div>
      </section>
    </>
  )
}

export default TermsConditions
