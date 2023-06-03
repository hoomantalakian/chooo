"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import style from "./Header.module.scss";

const menuItems = [
	{ title: "خانه", src: "home" },
	{ title: "محصولات", src: "products" },
	{ title: "گالری", src: "gallery" },
	{ title: "درباره", src: "about" },
];

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
				<h1 className={style.home_logo}>LOGO</h1>
				<ul
					className={`${style.menu} ${
						isHamburgerOpen && style.menu_open
					}`}
				>
					{menuItems.map((item) => {
						return <li key={item.src}>{item.title}</li>;
					})}
					{isHamburgerOpen && (
						<li>
							<button onClick={hamburgeCloseHAndler}>بستن</button>
						</li>
					)}
				</ul>
				<button
					className={style.burger_btn}
					onClick={hamburgeOpenHAndler}
				>
					| مِنو |
				</button>
			</nav>
		</header>
	);
}

export default Header;
