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

	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

	function hamburgeOpenHAndler() {
		setIsHamburgerOpen(true)
	}

	return (
		<header className={style.header}>
			<nav className={style.full_nav}>
				<h1 className={style.home_logo}>CHOOO</h1>
				<ul className={style.menu}>
					{menuItems.map((item) => {
						return <li key={item.src}>{item.title}</li>;
					})}
				{isHamburgerOpen && <li>X</li>}
				</ul>
				<button className={style.burger_btn}>| مِنو |</button>
			</nav>
		</header>
	);
}

export default Header;
