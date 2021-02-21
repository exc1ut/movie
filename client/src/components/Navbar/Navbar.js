import React, { useState, useRef } from "react";
import styles from "./Navbar.module.css";
import NavItem from "./mini_tools/NavItem";
import Dots from "./mini_tools/dot";
import Searchbar from "./mini_tools/searchbar";
import Auth from "./mini_tools/userAuth";
import Burger from "./mini_tools/burger";
import { Container } from "@material-ui/core";
const Navbar = () => {
  let navItems = ["Home", "Catalog", "Pricing", "LIVE"];
  const [search, setSearch] = useState(false);

  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.Navbar}>
          <div className={styles.burger}>
            <Burger />
          </div>
          <div className={styles.Logo}>
            FLIX<span className={styles.tv}>TV</span>
          </div>

          <div className={styles.NavItems}>
            {navItems.map((item) => {
              return <NavItem name={item} />;
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
              <img
                src="https://purepng.com/public/uploads/large/search-icon-lob.png"
                alt=""
              />
            </div>
          ) : null}
          <Auth />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
