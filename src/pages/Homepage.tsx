import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const HomePage = () => {
	return (
		<div>
			<header style={{ backgroundColor: "#201055", height: "400px" }}>
				<Navbar />
			</header>
			<Footer />
		</div>
	);
};

export default HomePage;
