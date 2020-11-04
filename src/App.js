import React from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CopyrightFooter from "./components/CopyrightFooter";
import Footer from "./components/Footer";
import Masthead from "./components/Masthead";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";

const App = () => (
	<div>
		<Navbar />
		<Masthead />
		<PortfolioSection />
		<AboutSection />
		<ContactSection />
		<Footer />
		<CopyrightFooter />
	</div>
);

export default App;
