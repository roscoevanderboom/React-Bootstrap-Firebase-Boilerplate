import firebase from "../index";

let auth = firebase.auth();

export const onAuthStateChanged = (history, actions) => {
	auth.onAuthStateChanged((user) => {
		if (user === null) {
			history.push("/");
		}
		if (actions !== undefined) {
			actions.setUser(user);
		}
	});
};

export const createUserWithEmailAndPassword = (
	email,
	password,
	history,
	actions
) => {
	auth
		.createUserWithEmailAndPassword(email, password)
		.then(() => history.push("/admin/dashboard"))
		.catch((err) =>
			actions.notify({ variant: "danger", message: err.message })
		);
};

export const signInWithEmailAndPassword = (
	email,
	password,
	history,
	actions
) => {
	auth
		.signInWithEmailAndPassword(email, password)
		.then(() => history.push("/admin/dashboard"))
		.catch((err) =>
			actions.notify({ variant: "danger", message: err.message })
		);
};

export const signOut = () => {
	auth.signOut();
};
