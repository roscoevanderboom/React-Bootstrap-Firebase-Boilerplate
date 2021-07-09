const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return { ...state, user: payload };
    case "SET_NOTIFICATION_OPTIONS":
      return { ...state, notificationOptions: payload };
    default:
      break;
  }
};

export default reducer;