import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "@fontsource/cairo";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/700.css";
import "./styles/global.scss";
import "./i18n/config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
