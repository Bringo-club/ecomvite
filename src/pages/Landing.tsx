// import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import TopSection from "../components/Pages/Landing/TopSection";

const Landing = () => {
	return (
		<>
			<div
			className="bg-cover clip-top-section"
				style={{
					backgroundImage: "url(/imgs/backgrounds/topSection.png)",
				}}
			>
				<Navbar />
				<TopSection />
			</div>
		</>
	);
};

export default Landing;
