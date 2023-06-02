import Header from "@/components/Header";
import "../../style/globals.scss";
import Footer from "@/components/Footer";
// -------------------

export const metadata = {
	title: "چــو دیزاین",
	description: "فروشگاه مبلمان چوبی",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fa">
			<body>
				<Header></Header>
				{children}
				{/* <Footer></Footer> */}
			</body>
		</html>
	);
}
