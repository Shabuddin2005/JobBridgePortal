import { Link } from "react-router-dom"
import { useContext } from "react"

import { AuthContext } from "../Context/AuthContext"

import "./Navbar.css"

function Navbar() {

    const { isLoggedIn, logout } = useContext(AuthContext)

    return (
        <nav className="navbar">

            <h2>JobBridge</h2>

            <div className="navbar-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/jobs">
                    Jobs
                </Link>

                <Link to="/saved-jobs">
                    Saved Jobs
                </Link>

                <Link to="/dashboard">
                    Dashboard
                </Link>

                {!isLoggedIn && (
                    <Link to="/login">
                        Login
                    </Link>
                )}

                {isLoggedIn && (
                    <button onClick={logout}>
                        Logout
                    </button>
                )}

            </div>

        </nav>
    )
}

export default Navbar