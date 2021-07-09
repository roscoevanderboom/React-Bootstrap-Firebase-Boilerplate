import React, { useEffect, useContext } from "react";
import store from "store";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

import { notificationComponents } from "./notificationComponents";

function NotificationProvider(props) {
	const { state } = useContext(store);
	const { notificationOptions } = state;
	const notificationAlertRef = React.useRef(null);

	useEffect(() => {
		if (notificationOptions !== null) {
			notificationComponents(notificationAlertRef, notificationOptions);
		}
	}, [notificationOptions]);

	return (
		<>
			<div className="rna-container">
				<NotificationAlert ref={notificationAlertRef} />
			</div>
			{props.children}
		</>
	);
}

export default NotificationProvider;
