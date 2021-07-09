import React from "react";

export const notificationComponents = (notificationAlertRef, options) => {
	const { message, variant } = options;

	const AlertBody = () => (
		<div>
			<p className="p-2 m-0">{message}</p>
		</div>
	);

	let props = {};
	switch (variant) {
		case "success":
			props = {
				message: <AlertBody />,
				place: "tr",
				type: variant,
				autoDismiss: 3,
				icon: "nc-icon nc-bell-55",
			};
			break
		case "info":
			props = {
				message: <AlertBody />,
				place: "tl",
				type: variant,
				autoDismiss: 3,
				icon: "nc-icon nc-bell-55",
			};
			break
		case "danger":
			props = {
				message: <AlertBody />,
				place: "tc",
				type: variant,
				autoDismiss: 0,
				icon: "nc-icon nc-bell-55",
			};
			break
		default:
			break;
	}
	notificationAlertRef.current.notificationAlert(props);
};
