import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

if (document.getElementById("employeeApp")) {
    const Index = ReactDOM.createRoot(document.getElementById("employeeApp"));

    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
