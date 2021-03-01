import React from 'react';
import styles from '../Navbar.module.css'
const UserAuth = () => {
    return (
        <div className = {styles.Auth}>
            Sign in <div className={styles.icon}><img src="https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/06-512.png" alt=""/></div>
        </div>
    );
}

export default UserAuth;
