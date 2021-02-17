import React from 'react';
import styles from '../Navbar.module.css'
import {useRef, useEffect} from 'react'
const Searchbar = (props) => {
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    },[props.display])
    return (
        <div>
            <input ref ={inputRef} type="text" placeholder = "I am looking for ..." className = {props.display?styles.searchVisible:styles.searchbar}/>
        </div>
    );
}

export default Searchbar;
