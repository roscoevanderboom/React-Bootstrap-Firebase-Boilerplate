import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import store from "store";
import { useHistory } from "react-router";
import { Form, Button, Card } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/actions/auth";

export default function Register() {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		confirm: "",
	});
	const { actions } = useContext(store);
	const history = useHistory();

	const password_no_match = inputs.password !== inputs.confirm;
	const password_too_short = inputs.password.length < 8;

	const handleInputs = (key, value) => {
		setInputs({ ...inputs, [key]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password_no_match || password_too_short){
			return;
		}
		createUserWithEmailAndPassword(
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
					<h3 className="text-center pt-1 pb-3">Register your account</h3>
				</Card.Header>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<label>Email</label>
						<Form.Control
							value={inputs.email}
							placeholder="Email"
							type="email"
							required
							onChange={(e) => handleInputs("email", e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<label>Password</label>
						<Form.Control
							value={inputs.password}
							placeholder="Password"
							type="password"
							required
							isInvalid={password_too_short}
							onChange={(e) => handleInputs("password", e.target.value)}
						></Form.Control>
						<Form.Control.Feedback type="invalid">
							Passwords too short
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group>
						<label>Confirm password</label>
						<Form.Control
							value={inputs.confirm}
							placeholder="Confirm password"
							type="password"
							required
							isInvalid={password_no_match}
							onChange={(e) => handleInputs("confirm", e.target.value)}
						></Form.Control>
						<Form.Control.Feedback type="invalid">
							Passwords do not match
						</Form.Control.Feedback>
					</Form.Group>
					<div className="d-flex justify-content-around mb-3">
						<Button variant="success" type="submit">
							Submit
						</Button>

						<Link to="/login">
							<Button variant="info">Login</Button>
						</Link>
					</div>
					<Link to="/">Back to Landing Page...</Link>
				</Form>
			</Card>
		</div>
	);
}
