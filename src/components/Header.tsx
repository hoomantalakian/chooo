import React from "react";
import style from "./Header.module.scss";

const menuItems = [
	{ title: "خانه", src: "home" },
	{ title: "محصولات", src: "products" },
	{ title: "گالری", src: "gallery" },
	{ title: "درباره", src: "about" },
];

function Header() {
	return (
		<header className={style.header}>
			<nav>
				<ul className={style.menu}>
					{menuItems.map((item) => {
						return <li key={item.title}>{item.title}</li>;
					})}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
