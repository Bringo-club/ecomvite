import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import FeaturesSection from "../components/Pages/Landing/FeaturesSection";
import HowWeHelpSection from "../components/Pages/Landing/HowWeHelpSection";
import IntegrationSection from "../components/Pages/Landing/IntegrationSection";
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
			<FeaturesSection />
			<IntegrationSection />
			<HowWeHelpSection />
			<Footer />
		</>
	);
};

export default Landing;
