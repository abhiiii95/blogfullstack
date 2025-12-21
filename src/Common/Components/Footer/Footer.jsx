import React from 'react';
import styles from "./footer.module.scss"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles?.footerWrapper}>
      <div className='container'>
        <div className={styles?.content}>
        <p className={styles?.reservedtext}>© 2025 World Tour Trip. All rights reserved.</p>
        <ul>
          <li>
            <Link href="/privacy">
              Privacy</Link> 
          </li>
          <li>
            <Link href="/terms">
              Terms Conditions</Link> 
          </li>
        </ul>
          </div>    
          
      </div>
    </footer>
  )
}

export default Footer
