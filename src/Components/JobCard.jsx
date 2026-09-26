import React from 'react'
import { Link } from 'react-router-dom'
import "./JobCard.css"

function JobCard({
    id,
    title,
    company,
    location,
    salary,
    onSave
}) {

    return (
        <div className="job-card">

            <h2>{title}</h2>

            <p>
                <strong>Company:</strong> {company}
            </p>

            <p>
                <strong>Location:</strong> {location}
            </p>

            <p>
                <strong>Salary:</strong> {salary}
            </p>

            <div className="job-card-buttons">

                <Link to={`/jobs/${id}`}>
                    <button className="view-button">
                        View Details
                    </button>
                </Link>

                <button
                    className="save-button"
                    onClick={() => onSave(id)}
                >
                    Save Job
                </button>

            </div>

        </div>
    )
}

export default JobCard