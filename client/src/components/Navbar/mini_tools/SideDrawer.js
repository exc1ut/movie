import React from 'react';
import NavItem from './NavItem'
import Auth from './userAuth'
import styles from '../Navbar.module.css'
import Backdrop from './Backdrop'
const SideDrawer = (props) => {
    let navItems = ["Home", "Catalog", "Pricing", "LIVE"];
    return (
       <>
       <Backdrop show/>
       <div className ={styles.SideDrawer} >
           
           {navItems.map(item => {
              return <NavItem name = {item}/>
          })} 
           <Auth/>
        </div>
       </>
    
           
           
        
    );
}

export default SideDrawer;
