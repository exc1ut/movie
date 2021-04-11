import React from 'react';
import styles from "../Navbar.module.css"
const Dots = () => {
    let numOfDots = [1,2,3];
    return (
        <div className = {styles.dots}>
            {numOfDots.map(item => {
                return <div className = {styles.dot}></div>
            })}
        </div>

    );
}

export default Dots;
