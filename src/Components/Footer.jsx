
import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2>JobBridge</h2>
                    <p>
                        Connecting talent with opportunities.
                        Take the next step in your career with JobBridge.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/jobs">Browse Jobs</Link>
                    <Link to="/saved-jobs">Saved Jobs</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div>

                <div className="footer-contact">
                    <h3>About JobBridge</h3>
                    <p>
                        Explore career opportunities and find roles
                        that match your skills and interests.
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} JobBridge.
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
