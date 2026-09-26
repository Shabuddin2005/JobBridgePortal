import React from "react"
import { Link } from "react-router-dom"

import "./Home.css"

function Home() {

    return (

        <div className="home-page">

            <section className="hero-section">

                <div className="hero-content">

                    <h1>
                        Find Your Next Opportunity 🚀
                    </h1>

                    <p>
                        Discover jobs, explore opportunities,
                        and take the next step in your career.
                    </p>

                    <Link to="/jobs">
                        <button className="browse-jobs-button">
                            Browse Jobs
                        </button>
                    </Link>

                </div>

            </section>


            <section className="features-section">

                <h2>
                    Why Use JobBridge?
                </h2>

                <div className="features-container">

                    <div className="feature-card">

                        <div className="feature-icon">
                            🔎
                        </div>

                        <h3>
                            Find Jobs
                        </h3>

                        <p>
                            Search and filter jobs based on
                            your preferred role and location.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            💼
                        </div>

                        <h3>
                            Explore Opportunities
                        </h3>

                        <p>
                            View detailed information about
                            available job opportunities.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            📄
                        </div>

                        <h3>
                            Apply Easily
                        </h3>

                        <p>
                            Apply for jobs and keep track of
                            your applications from your dashboard.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Home