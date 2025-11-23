import React from 'react';
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles?.footerWrapper}>
      <div className='container'>
      <p className={styles?.reservedtext}>© 2025 AbhimaniTrip. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
