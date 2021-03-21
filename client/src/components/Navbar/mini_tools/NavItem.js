import React from 'react';
import styles from "../Navbar.module.css"
const NavItem = (props) => {
    let live = props.name === "LIVE";
    return (
        <div className = {styles.NavItem}>
           <div> {props.name}</div>  
            
            {props.name !== "Pricing" ? <div className = {live ? styles.livedot :styles.dot} style ={{marginRight: '4px'}}></div>:null}
        </div>
    )
        
}

export default NavItem;
