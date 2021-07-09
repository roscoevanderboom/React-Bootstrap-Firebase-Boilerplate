/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "store";
import NotificationProvider from "components/Notifications/Notifications";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import Login from "views/Login";
import Register from "views/Register";
import LandingPage from "views/LandingPage";

ReactDOM.render(
	<BrowserRouter>
		<Provider>
			<NotificationProvider>
				<Switch>
					<Route
						path="/"
						exact
						render={(props) => <LandingPage {...props} />}
					/>
					<Route
						path="/admin"
						render={(props) => <AdminLayout {...props} />}
					/>
					<Route path="/login" render={(props) => <Login {...props} />} />
					<Route path="/register" render={(props) => <Register {...props} />} />
				</Switch>
			</NotificationProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
