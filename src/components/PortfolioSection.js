import React from "react";
import Portfolio from "./Portfolio";

function PortfolioSection() {
	return (
		<section className="page-section portfolio" id="portfolio">
			<div className="container">
				{/* <!-- Portfolio Section Heading--> */}
				<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
					Portfolio
				</h2>
				{/* <!-- Icon Divider--> */}
				<div className="divider-custom">
					<div className="divider-custom-line"></div>
					<div className="divider-custom-icon">
						<i className="fas fa-star"></i>
					</div>
					<div className="divider-custom-line"></div>
				</div>
				{/* <!-- Portfolio Grid Items--> */}
				<div className="row">
					{/* <!-- Portfolio Item 1--> */}
					<Portfolio imgURL="/images/cabin.png" />
					{/* <!-- Portfolio Item 2--> */}
					<Portfolio imgURL="/images/cake.png" />
					{/* <!-- Portfolio Item 3--> */}
					<Portfolio imgURL="/images/circus.png" />
					{/* <!-- Portfolio Item 4--> */}
					<Portfolio imgURL="/images/game.png" />
					{/* <!-- Portfolio Item 5--> */}
					<Portfolio imgURL="/images/safe.png" />
					{/* <!-- Portfolio Item 6--> */}
					<Portfolio imgURL="/images/submarine.png" />
				</div>
			</div>
		</section>
	);
}

export default PortfolioSection;
