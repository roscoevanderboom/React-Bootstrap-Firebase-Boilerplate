import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import store from "store";
import { useHistory } from "react-router";
import { Form, Button, Card } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/actions/auth";

export default function Login() {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const { actions } = useContext(store);
	const history = useHistory();

	const handleInputs = (key, value) => {
		setInputs({ ...inputs, [key]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(
			inputs.email,
			inputs.password,
			history,
			actions
		);
	};

	return (
		<div
			style={{ height: "100vh", width: "100%" }}
			className="d-flex align-items-center justify-content-center bg bg-dark"
		>
			<Card className="p-3 m-2" style={{ maxWidth: "400px", width: "100%" }}>
				<Card.Header className="p-0">
					<h3 className="text-center pt-1 pb-3">Login</h3>
				</Card.Header>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<label>Email</label>
						<Form.Control
							value={inputs.email}
							placeholder="Email"
							type="email"
							onChange={(e) => handleInputs("email", e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<label>Password</label>
						<Form.Control
							value={inputs.password}
							placeholder="Password"
							type="password"
							onChange={(e) => handleInputs("password", e.target.value)}
						></Form.Control>
					</Form.Group>
					<div className="d-flex justify-content-around mb-3">
						<Button variant="success" type="submit">
							Submit
						</Button>

						<Link to="/register">
							<Button variant="info">Register</Button>
						</Link>
					</div>
					<Link to="/">Back to Landing Page...</Link>
				</Form>
			</Card>
		</div>
	);
}
