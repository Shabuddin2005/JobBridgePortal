import { useContext } from "react"

import { AuthContext } from "../Context/AuthContext"
import { SavedJobsContext } from "../Context/SavedJobsContext"
import { ApplicationContext } from "../Context/ApplicationContext"

import "./Dashboard.css"

function Dashboard() {

    const { logout } = useContext(AuthContext)

    const { savedJobs } = useContext(SavedJobsContext)

    const { applications } = useContext(ApplicationContext)

    return (

        <div className="dashboard-page">

            <h1>Dashboard</h1>

            <div className="dashboard-welcome">

                <h2>Welcome to JobBridge 👋</h2>

                <p>
                    You are successfully logged in.
                </p>

            </div>


            <div className="dashboard-stats">

                <div className="dashboard-stat-card">

                    <h2>{savedJobs.length}</h2>

                    <p>Saved Jobs</p>

                </div>


                <div className="dashboard-stat-card">

                    <h2>{applications.length}</h2>

                    <p>Applications</p>

                </div>


                <div className="dashboard-stat-card">

                    <h2>✓</h2>

                    <p>Account Status</p>

                </div>

            </div>


            <div className="dashboard-section">

                <h2>Saved Jobs</h2>

                {savedJobs.length === 0 ? (

                    <p className="dashboard-empty">
                        You haven't saved any jobs yet.
                    </p>

                ) : (

                    <p>
                        You have saved {savedJobs.length} job
                        {savedJobs.length !== 1 ? "s" : ""}.
                    </p>

                )}

            </div>


            <div className="dashboard-section">

                <h2>Applications</h2>

                {applications.length === 0 ? (

                    <p className="dashboard-empty">
                        You haven't applied for any jobs yet.
                    </p>

                ) : (

                    <p>
                        You have submitted {applications.length} application
                        {applications.length !== 1 ? "s" : ""}.
                    </p>

                )}

            </div>


            <div className="dashboard-actions">

                <button
                    className="dashboard-logout"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </div>
    )
}

export default Dashboard