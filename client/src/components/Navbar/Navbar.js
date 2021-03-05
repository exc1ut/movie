import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavItem from "./mini_tools/NavItem";
import Dots from "./mini_tools/dot";
import Searchbar from "./mini_tools/searchbar";
import Auth from "./mini_tools/userAuth";
import Burger from "./mini_tools/burger";
import { Container} from "@material-ui/core";
import {Link} from 'react-router-dom';
import SearchButton from './svg/SearchSvg'
import CloseSearchBar from './mini_tools/CloseSearchBar'

const Navbar = () => {
  let navItems = ["Films", "Serials", "Cartoons", "LIVE"];
  const [search, setSearch] = useState(false);
  const [sideDrawer, setSideDrawer] = useState(false);
  
  return (
    <div className={styles.Header}>
      <Container>
       {!search?<div className={styles.Navbar}>
          <div className={styles.burger}>
            <Burger />
          </div>
          <div className={styles.Logo}>
            FLIX<span className={styles.tv}>TV</span>
          </div>

          <div className={styles.NavItems}>
            {navItems.map((item) => {
              return <Link key={item} to = {`/${item.toLowerCase()}`}><NavItem name={item} /></Link>;
            })}
            <Dots />
          </div>
          <Searchbar display={search} />
          {!search ? (
            <div
              className={styles.searchIcon}
              onClick={(e) => {
      
                setSearch(true);
              }}
            >
              <SearchButton width = "25px" height = "auto" fill = "rgb(47, 128, 237) "/>
            </div>
          ) : null}
          <Auth />
        </div>:<div className = {styles.SearchForSmall}>
        <Searchbar display={search} width = "90%" />
        <CloseSearchBar close = {()=>{setSearch(false)}} width = "16px" height = "auto" fill = '#2f80ed' />
        </div>}
      </Container>
    </div>
  );
};

export default Navbar;
