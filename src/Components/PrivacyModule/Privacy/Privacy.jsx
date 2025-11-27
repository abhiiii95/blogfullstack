import AboutBanner from '@/Common/Components/AboutBanner/AboutBanner'
import React from 'react';
import styles from "./privacy.module.scss";

const Privacy = () => {
    const bannerData = [
        {
            id:1,
            routeText:"Privacy",
            route:""
        }
    ]
  return (
    <>
      <AboutBanner banner={bannerData} heading={"Privacy Policy"}/>
      <section className={styles?.privacyWrapper}>
        <div className='container'>
            <div className={styles?.content}>
                <h2>
                Privacy Policy
                </h2>
                <p>
                This Privacy Policy explains how we collect, use, store, and protect your personal information when you access our website and services, including flight bookings, hotel reservations, and holiday packages. By using our platform, you agree to the practices described in this policy.
                </p>
                <h5>
                1. Information We Collect
                </h5>
                <p>
                We may collect the following information:
                </p>
                <ul>
                    <li>Personal details such as name, email, phone number, and address</li>
                    <li>Booking details including flight, hotel, and travel preferences</li>
                    <li>
                    Payment information processed through secure third-party gateways
                    </li>
                    <li>
                    Technical data such as IP address, device type, and browsing behavior
                    </li>
                </ul>
                <h5>
                2. How We Use Your Information
                </h5>
                <p>
                We use the collected information to:
                </p>
                <ul>
                    <li>
                    Process flight and hotel bookings
                    </li>
                    <li>
                    Manage reservations and customer accounts
                    </li>
                    <li>Provide customer support</li>
                    <li>
                    Send booking confirmations and updates
                    </li>
                    <li>
                    Improve website performance and user experience
                    </li>
                    <li>
                    Offer relevant travel deals and services
                    </li>
                </ul>
                <h5>
                3. Data Sharing
                </h5>
                <p>
                We may share your information with:
                </p>
                <ul>
                    <li>
                    Airlines, hotels, and travel service providers
                    </li>
                    <li>
                    Secure payment processors
                    </li>
                    <li>
                    Legal authorities when required by law
                    </li>
                </ul>
                <p>
                We do not sell or trade personal information to third parties.
                </p>
          <h5>
          4. Cookies and Tracking
          </h5>
          <p>
          Our platform may use cookies to:
          </p>
          <ul>
            <li>
            Improve website functionality
            </li>
            <li>
            Remember user preferences
            </li>
            <li>
            Analyze website traffic and usage
            </li>
          </ul>
          <p>
          Users can manage cookie settings through their browser.
          </p>
          <h5>
          5. Data Security
          </h5>
          <p>
          We take reasonable measures to protect your personal data from unauthorized access, loss, or misuse. However, no online transmission is completely secure, and users share information at their own risk.
          </p>
          <h5>
          6. User Rights
          </h5>
          <p>
          Users may:
          </p>
          <ul>
            <li>
            Request access to their personal information
            </li>
            <li>
            Update or correct their details
            </li>
            <li>
            Request deletion of their data, subject to legal requirements
            </li>
          </ul>
          <h5>
          7. Third-Party Links
          </h5>
          <p>
          Our website may contain links to third-party sites. We are not responsible for their privacy practices or content.
          </p>
          <h5>
          8. Policy Updates
          </h5>
          <p>
          We may update this Privacy Policy at any time. Continued use of the platform indicates acceptance of the updated policy.
          </p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Privacy
