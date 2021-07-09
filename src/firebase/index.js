import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import credentials from "./api";

export const FieldValue = app.firestore.FieldValue;
export default app.initializeApp(credentials);
