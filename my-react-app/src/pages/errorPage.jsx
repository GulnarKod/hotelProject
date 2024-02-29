import React from "react";
import "../scss/main.css";
const ErrorPage = () => {
    return (
        <div className="error">
            <h1>Error 404</h1>
            <div >
                <p >Page not found. Go <a href="/">Home</a>
            </p>
            </div>
            

        </div>
    )
}
export default ErrorPage;