import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footContainer}>
            <div className={styles.line}>
                <p className={styles.title}>Get to know us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>About Amazon</p>
                <p>Investor relations</p>
                <p>Amazon Devices</p>                   
            </div>
            <div className={styles.line}>
                <p className={styles.title}>Make Money with Us</p>
                <p>Sell products on Amazon</p>
                <p>Become an Affiliate</p>
                <p>Advertise Your Products</p>
                <p>Self-publish with US</p>
                <p>Host an Amazon Hub</p> 
            </div>
            <div className={styles.line}>
                <p className={styles.title}>Amazon Payment Products</p>
                <p>Amazon Business Card</p>
                <p>Shop with Points</p>
                <p>Reload Your Balance</p>
                <p>Investor relations</p>
                <p>Amazon Currency Converter</p> 
            </div>
        </div>
        <div className={styles.footerBottom}>
        <p className={styles.footCond}>Conditions of Use  Privacy Notice      Interest-Based Ads      <span className={styles.footspan}>© 2020, Amazon Clone By Aaron</span></p>
        </div>
    </div>
  )
}

export default Footer