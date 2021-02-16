import React from 'react';
import styles from './Navbar.module.css';
import NavItem from './mini_tools/NavItem'
import Dots from './mini_tools/dot'
import Searchbar from './mini_tools/searchbar'
import Auth from './mini_tools/userAuth'
import Burger from './mini_tools/burger'
const Navbar = () => {
    let navItems = ["Home", "Catalog", "Pricing", "LIVE"];
    return (
        <div className ={styles.Header}>
            <>
              <div className={styles.Navbar}>
           <div className={styles.Logo}>FLIX<span className ={styles.tv}>TV</span></div>
            <div className={styles.burger}>
            <Burger/>
            </div>
           
           <div className={styles.NavItems}>
               {navItems.map(item => {
                   return <NavItem name = {item}/>
               })}
                <Dots/>
               </div>
               <Searchbar/>
               <Auth/>
           </div>
        </>
        </div>
        
     
    );
}

export default Navbar;
