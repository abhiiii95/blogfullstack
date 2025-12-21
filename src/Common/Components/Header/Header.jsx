'use client';
import React, { useState } from "react";
import styles from "./header.module.scss";
import logo from "../../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import MobileMenu from "./MobileMenu/MobileMenu";
import { navLinks } from "@/static/static";
const Header = () => {

 const route =  usePathname();
const [show,setShow]= useState(false);

  return (
    <>
    <header className={styles?.headerWrapper}>
      <div className="container">
        <div className={styles?.headerContent}>
          <Link href={"/"} className={styles?.logoWrapper}>
            <Image src={logo} alt="main-logo" title="logo" priority />
          </Link>
          <nav className={styles?.navBar}>
            <ul className={styles?.navBarList}>
              {navLinks?.map((val, i) => {
                return (
                  <li className={styles?.navBarListItem} key={i}>
                    <Link href={val?.route} className={route == val?.route ? styles?.activeLink:null}>{val?.routeText}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles?.countryMenu}>

       
          <button className={styles?.country} aria-label="Select Country" >
          <Icon icon="circle-flags:in" width="24" height="24" />
          </button>
          <button className={styles?.mobileMenuIcon} aria-label="Open Mobile Menu" onClick={()=>setShow(true)}>
          <Icon icon="basil:menu-solid" width="24" height="24" />
          </button>
          </div>
        </div>
      </div>
    </header>
    <MobileMenu show={show} setShow={setShow} logo={logo}/>
    </>
  );
};
export default Header;
