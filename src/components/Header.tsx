import React from "react";
import style from "./Header.module.scss";

function Header() {
	return (
		<header className={style.header}>
			<nav>
				<ul className={style.menu}>
					<li>خانه</li>
					<li>محصولات</li>
					<li>گالری</li>
					<li>درباره</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
