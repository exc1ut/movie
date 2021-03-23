import React, { useState } from "react";
import styles from "../Navbar.module.css";
import { useRef, useEffect } from "react";
import SearchButton from "../svg/SearchSvg";
const Searchbar = (props) => {
	const inputRef = useRef(null);

	const [state, setState] = useState(window.innerWidth);
	window.onresize = () => {
		setState(window.innerWidth);
	};

	useEffect(() => {
		inputRef.current.focus();
	}, [props.display]);
	return (
		<div
			className={styles.searchWrapper}
			style={{
				width: props.width ? props.width : "250px",
				height: "40px",
				position: "relative",
			}}
		>
			<input
				ref={inputRef}
				type="text"
				placeholder="I am looking for ..."
				className={styles.searchVisible}
				style={{ opacity: !props.opacity && state < 601 ? 0 : 1 }}
			/>
			<button
				className={
					!props.display ? styles.buttonNotVisible : styles.buttonVisible
				}
			>
				<SearchButton width="20px" height="auto" fill="#2f80ed" />
			</button>
		</div>
	);
};

export default Searchbar;
