import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { SavedJobsContext } from "../Context/SavedJobsContext"
import { getJobById } from "../services/jobService"

import "./SavedJobs.css"

function SavedJobs() {

    const { savedJobs, handleRemove } = useContext(SavedJobsContext)

    const [savedJobDetails, setSavedJobDetails] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchSavedJobs = async () => {

            if (savedJobs.length === 0) {
                setSavedJobDetails([])
                return
            }

            setLoading(true)

            try {

                const jobs = await Promise.all(
                    savedJobs.map((id) => getJobById(id))
                )

                setSavedJobDetails(jobs)

            } catch (error) {

                console.log("Failed to load saved jobs")

            } finally {

                setLoading(false)

            }
        }

        fetchSavedJobs()

    }, [savedJobs])


    if (loading) {
        return (
            <div className="saved-jobs-page">
                <h2>Loading saved jobs...</h2>
            </div>
        )
    }


    return (

        <div className="saved-jobs-page">

            <h1>Saved Jobs</h1>

            {savedJobDetails.length === 0 ? (

                <h2 className="no-saved-jobs">
                    No saved jobs yet
                </h2>

            ) : (

                <div className="saved-jobs-list">

                    {savedJobDetails.map((job) => (

                        <div
                            className="saved-job-card"
                            key={job.id}
                        >

                            <h2>{job.title}</h2>

                            <p>
                                <strong>Company:</strong>{" "}
                                {job.company || "Not specified"}
                            </p>

                            <p>
                                <strong>Location:</strong>{" "}
                                {job.city || "Not specified"}
                            </p>

                            <p>
                                <strong>Salary:</strong>{" "}
                                {job.salary_min
                                    ? `${job.salary_min}${job.salary_max ? ` - ${job.salary_max}` : ""} ${job.salary_currency || ""} / ${job.salary_period || ""}`
                                    : "Not specified"}
                            </p>

                            <div className="saved-job-buttons">

                                <Link to={`/jobs/${job.id}`}>
                                    <button className="saved-view-button">
                                        View Details
                                    </button>
                                </Link>

                                <button
                                    className="saved-remove-button"
                                    onClick={() => handleRemove(job.id)}
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    )
}

export default SavedJobs