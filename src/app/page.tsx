import Header from "../../components/Header";

export default function Home() {
	return (
		<div id="Body" className=" text-gray-50">
			<Header></Header>
			<main>
				<h1 className="font-extrabold text-6xl ">چــو دیزاین</h1>
				<p className="pt-5">جادوی هزاره ســوم</p>
			</main>
			<footer>
				<p className="text-center text-gray-400">© Choo Design 2023 | Developerd by codEnd</p>
			</footer>
		</div>
	);
}
