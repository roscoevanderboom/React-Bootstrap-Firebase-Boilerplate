import React from "react";

// react-bootstrap components
import { Row, Col } from "react-bootstrap";
import Header from "components/Navbars/AdminNavbar";
// Styles
import "../assets/css/landingpage.css";

export default function LandingPage() {
	return (
		<div className="wrapper">
			<Header brand="Landing page" />
			<header id="landing-page-header" className="centered-container">		
				<h3 id="landing-page-header-title">Landing page</h3>
			</header>
		</div>
	);
}
