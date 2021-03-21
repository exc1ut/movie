import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import NavItem from "./mini_tools/NavItem";
import Dots from "./mini_tools/dot";
import Searchbar from "./mini_tools/searchbar";
import Auth from "./mini_tools/userAuth";
import Burger from "./mini_tools/burger";
import { Container } from "@material-ui/core";
import { BrowserRouter, NavLink } from "react-router-dom";
import SearchButton from "./svg/SearchSvg";
import CloseSearchBar from "./mini_tools/CloseSearchBar";
import { Drawer } from "@material-ui/core";
import { motion } from "framer-motion";
const Navbar = () => {
	let navItems = ["Films", "Serials", "Cartoons", "LIVE"];
	const [search, setSearch] = useState(false);
	const [sideDrawer, setSideDrawer] = useState(false);

	const List = () => {
		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					margin: "0",
					flexDirection: "column",
					padding: "10px",
					background: "#10141e",
					opacity: 0.99,
					height: "200px",
				}}
			>
				{navItems.map((item) => {
					return (
						<NavLink
							key={item}
							style={{ textDecoration: "none" }}
							to={`/${item.toLowerCase()}`}
						>
							<div
								style={{
									color: "white",
									marginTop: "10px",
									fontSize: "12pt",
									marginLeft: "30px",
								}}
							>
								{item}
							</div>
						</NavLink>
					);
				})}
			</div>
		);
	};
	const toggleDrawer = (open) => {
		setSideDrawer(open);
	};
	return (
		<>
			<BrowserRouter>
				<Drawer
					BackdropProps={{ invisible: true }}
					elevation={0}
					anchor="top"
					open={sideDrawer}
					onClose={() => {
						toggleDrawer(false);
					}}
				>
					{List()}
				</Drawer>
				<motion.div
					initial={{
						y: 0,
					}}
					animate={
						sideDrawer
							? {
									y: 180,
							  }
							: ""
					}
					className={styles.Header}
				>
					<Container>
						{!search ? (
							<div className={styles.Navbar}>
								<div
									style={{ cursor: "pointer" }}
									className={styles.burger}
									onClick={() => toggleDrawer(!sideDrawer)}
								>
									<Burger />
								</div>

								<div className={styles.Logo}>
									FLIX<span className={styles.tv}>TV</span>
								</div>

								<div className={styles.NavItems}>
									{navItems.map((item) => {
										return (
											<NavLink
												style={{ textDecoration: "none" }}
												key={item}
												to={`/${item.toLowerCase()}`}
											>
												<NavItem name={item} />
											</NavLink>
										);
									})}
									<Dots />
								</div>
								<Searchbar />
								{!search ? (
									<div
										className={styles.searchIcon}
										onClick={(e) => {
											setSearch(true);
										}}
									>
										<SearchButton
											width="25px"
											height="auto"
											fill="rgb(47, 128, 237) "
										/>
									</div>
								) : null}
								<Auth />
							</div>
						) : (
							<motion.div
								initial={{
									opacity: 0,
									y: 50,
								}}
								animate={
									search
										? {
												opacity: 1,
												y: 0,
										  }
										: {
												y: 50,
										  }
								}
								className={styles.SearchForSmall}
							>
								<Searchbar width="90%" opacity={search} />
								<CloseSearchBar
									close={() => {
										setSearch(false);
									}}
									width="16px"
									height="auto"
									fill="#2f80ed"
								/>
							</motion.div>
						)}
					</Container>
				</motion.div>
			</BrowserRouter>
		</>
	);
};

export default Navbar;
