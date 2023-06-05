"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import style from "./Header.module.scss";
import Image from "next/image";
//
import whiteLogo from "../../public/assets/white-logo.png"
// -------------------------
const desktopMenuItems = [
	{ title: "خانه", src: "home" },
	{ title: "محصولات", src: "products" },
	{ title: "گالری", src: "gallery" },
	{ title: "درباره", src: "about" },
];

const mobileMenuItems = [
	{ title: "خانــــــــه", src: "home" },
	{ title: "محصولات", src: "products" },
	{ title: "گالـــــــری", src: "gallery" },
	{ title: "دربـــــــاره", src: "about" },
	{ title: "مشــــاوره", src: "about" },
];

// ------------------------

function Header() {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

	function hamburgeOpenHAndler() {
		setIsHamburgerOpen(true);
	}
	function hamburgeCloseHAndler() {
		setIsHamburgerOpen(false);
	}

	return (
		<header className={style.header}>
			<nav className={style.full_nav}>
				{/* <h1 className={style.home_logo}>LOGO</h1> */}
				<Image src={whiteLogo} height="20" alt="Chooo logo" className={style.home_logo}></Image>
				{/* Desktop Menu */}
				<ul className={`${style.desk_menu}`}>
					{desktopMenuItems.map((item) => {
						return <li key={item.src} >{item.title}</li>;
					})}
				</ul>
				{/* Mobile Menu */}
				<ul
					
					className={`${style.mobile_menu} ${
						isHamburgerOpen && style["mobile_menu--open"]
					}`}
				>
					{mobileMenuItems.map((item) => {
						return <li key={item.src} onBlur={hamburgeCloseHAndler}>{item.title}</li>;
					})}
					<button
						className={style.close_btn}
						onClick={hamburgeCloseHAndler}
					>
						| X |
					</button>
				</ul>
			</nav>
			<button className={style.burger_btn} onClick={hamburgeOpenHAndler}>
				| مِنو |
			</button>
		</header>
	);
}

export default Header;
