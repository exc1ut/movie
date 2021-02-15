import React from 'react';
import styles from "../Navbar.module.css"
const NavItem = (props) => {
    let live = props.name === "LIVE";
    return (
        <div className = {styles.NavItem}>
            {props.name} 
            {props.name !== "Pricing" ? <div className = {live ? styles.livedot :styles.dot}></div>:null}
        </div>
    )
        
}

export default NavItem;
