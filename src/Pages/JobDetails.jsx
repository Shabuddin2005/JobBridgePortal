import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { getJobById } from "../Services/jobService"
import { ApplicationContext } from "../Context/ApplicationContext"

import "./JobDetails.css"

function JobDetails() {

    const { id } = useParams()
    const [applicationSubmitted, setApplicationSubmitted] = useState(false)
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const { applyForJob } = useContext(ApplicationContext)

    useEffect(() => {

        const fetchJob = async () => {

            try {

                const data = await getJobById(id)

                setJob(data)

            } catch (error) {

                console.log("Failed to load job")

            } finally {

                setLoading(false)

            }
        }

        fetchJob()

    }, [id])

    const handleSubmit = (event) => {

        event.preventDefault()

        applyForJob({
            jobId: job.id,
            jobTitle: job.title,
            company: job.company,
            name,
            email
        })

        setApplicationSubmitted(true)
        setShowForm(false)

        setName("")
        setEmail("")
    }

    if (loading) {
        return <h2>Loading job...</h2>
    }

    if (!job) {
        return (
            <div>
                <h2>Job not found</h2>

                <Link to="/jobs">
                    Back to Jobs
                </Link>
            </div>
        )
    }

    return (

        <div className="job-details-page">

            <div className="job-details-card">

                <h1>{job.title}</h1>

                <h2>{job.company}</h2>

                <div className="job-details-info">

                    <p>
                         {job.city || "Location not specified"}
                    </p>

                    <p>
                        {" "}
                        {job.salary_min
                            ? `${job.salary_min}${job.salary_max ? ` - ${job.salary_max}` : ""} ${job.salary_currency || ""} / ${job.salary_period || ""}`
                            : "Not specified"}
                    </p>

                </div>

                <div className="job-description">

                    <h3>Job Description</h3>

                    <p>
                        {job.description || "No description available"}
                    </p>

                </div>

                {!showForm && (

                    <button
                        className="apply-button"
                        onClick={() => setShowForm(true)}
                    >
                        Apply Now
                    </button>

                )}

                {showForm && (

                    <form
                        className="application-form"
                        onSubmit={handleSubmit}
                    >

                        <h3>Apply for this job</h3>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                            required
                        />

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />

                        <button
                            className="submit-button"
                            type="submit"
                        >
                            Submit Application
                        </button>

                    </form>

                )}

                {applicationSubmitted && (
    <div className="success-message">
        Application submitted successfully!
    </div>
)}

                <Link
                    to="/jobs"
                    className="back-button"
                >
                    ← Back to Jobs
                </Link>

            </div>

        </div>

    )
}

export default JobDetails