import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import Jobs from "./Pages/Jobs"
import JobDetails from "./Pages/JobDetails"
import SavedJobs from "./Pages/SavedJobs"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"

import SavedJobsProvider from "./Context/SavedJobsContext"
import AuthProvider from "./Context/AuthContext"
import ApplicationProvider from "./Context/ApplicationContext"

import ProtectedRoute from "./Components/ProtectedRoute"

function App() {

    return (
        <AuthProvider>

            <SavedJobsProvider>

                <ApplicationProvider>

                    <div>

                        <Navbar />

                        <Routes>

                            <Route
                                path="/"
                                element={<Home />}
                            />

                            <Route
                                path="/jobs"
                                element={<Jobs />}
                            />

                            <Route
                                path="/jobs/:id"
                                element={<JobDetails />}
                            />

                            <Route
                                path="/saved-jobs"
                                element={<SavedJobs />}
                            />

                            <Route
                                path="/login"
                                element={<Login />}
                            />

                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />

                        </Routes>

                    </div>

                </ApplicationProvider>

            </SavedJobsProvider>

        </AuthProvider>
    )
}

export default App