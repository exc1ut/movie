import React from 'react';
import styles from '../Navbar.module.css'
const Searchbar = () => {
    return (
        <div>
            <input type="text" placeholder = "I am looking for ..." className = {styles.searchbar}/>
        </div>
    );
}

export default Searchbar;
