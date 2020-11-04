import React from "react";
import ContactFormElement from "./ContactFormElement";

function ContactSection() {
	return (
		<div>
			<section className="page-section" id="contact">
				<div className="container">
					{/* <!-- Contact Section Heading--> */}
					<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
						Contact Me
					</h2>
					{/* <!-- Icon Divider--> */}
					<div className="divider-custom">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
							<i className="fas fa-star"></i>
						</div>
						<div className="divider-custom-line"></div>
					</div>
					{/* <!-- Contact Section Form--> */}
					<div className="row">
						<div className="col-lg-8 mx-auto">
							{/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
							<form id="contactForm" name="sentMessage" noValidate="novalidate">
								<ContactFormElement
									label="Name"
									id="name"
									type="text"
									validateMsg="Please enter your name."
								/>
								<ContactFormElement
									label="Email"
									id="email"
									type="email"
									validateMsg="Please enter your email address."
								/>
								<ContactFormElement
									label="Phone Number"
									id="phone"
									type="tel"
									validateMsg="Please enter your phone number."
								/>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls mb-0 pb-2">
										<label>Message</label>
										<textarea
											className="form-control"
											id="message"
											rows="5"
											placeholder="Message"
											required="required"
											data-validation-required-message="Please enter a message."
										></textarea>
										<p className="help-block text-danger"></p>
									</div>
								</div>
								<br />
								<div id="success"></div>
								<div className="form-group">
									<button
										className="btn btn-primary btn-xl"
										id="sendMessageButton"
										type="submit"
									>
										SUBMIT
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ContactSection;
