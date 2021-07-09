// Services
import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

import { onAuthStateChanged } from "firebase/actions/auth";

import { init } from "./initialState";
import reducer from "../reducers";

const Store = createContext();
export const Provider = (props) => {
	// *******************************************************
	// ********************* State ***************************
	// *******************************************************
	const [state, dispatch] = useReducer(reducer, init);
	// *******************************************************
	// ********************* Hooks ***************************
	// *******************************************************
	const history = useHistory();

	// *******************************************************
	// ********************* Effects *************************
	// *******************************************************

	React.useEffect(() => {
		onAuthStateChanged(history, actions);
	}, []);

	// *******************************************************
	// ********************* Actions *************************
	// *******************************************************
	// The actions method lives here as it makes access to dispatch and
	// state easy. It can easily be moved to another file by exporting
	// and using dispatch and payload as arguments

	const actions = {
		setUser: (payload) => {
			dispatch({
				type: "SET_USER",
				payload: payload,
			});
		},
		notify: (payload) => {
			dispatch({
				type: "SET_NOTIFICATION_OPTIONS",
				payload: payload
			})
		}
	};

	// *******************************************************
	// ********************* Provider ************************
	// *******************************************************
	return (
		<Store.Provider
			value={{
				state,
				dispatch,
				actions
			}}
		>
			{props.children}
		</Store.Provider>
	);
};
export default Store;

Provider.propTypes = {
	children: PropTypes.element,
};
