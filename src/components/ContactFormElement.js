import React from "react";

function ContactFormElement({ label, id, type, validateMsg }) {
	return (
		<div className="control-group">
			<div className="form-group floating-label-form-group controls mb-0 pb-2">
				<label>{label}</label>
				<input
					className="form-control"
					id={id}
					type={type}
					placeholder={label}
					required="required"
					data-validation-required-message={validateMsg}
				/>
				<p className="help-block text-danger"></p>
			</div>
		</div>
	);
}

export default ContactFormElement;
