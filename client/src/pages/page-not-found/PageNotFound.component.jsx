import React from "react";
import { Link } from "react-router-dom"
import './page-not-found.styles.css'

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h2>404</h2>
            <Link to="/" className="home-link"><button>Go Back Home</button></Link>
        </div>
    )
}

export default PageNotFound