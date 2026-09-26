import { useState, useEffect, useContext } from "react"
import JobCard from "../Components/JobCard"
import { SavedJobsContext } from "../Context/SavedJobsContext"
import {getJobs} from "../Services/jobService"

import "./Jobs.css"

function Jobs() {

    const [jobs, setJobs] = useState([])
    const [search, setSearch] = useState("")
    const [location, setLocation] = useState("All")

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const { handleSave } = useContext(SavedJobsContext)

    useEffect(() => {

        const fetchJobs = async () => {

            try {

                const data = await getJobs()

                setJobs(data)

            } catch (error) {

                setError("Failed to load jobs")

            } finally {

                setLoading(false)

            }
        }

        fetchJobs()

    }, [])

    const locations = [
        "All",
        ...new Set(
            jobs
                .map((job) => job.city)
                .filter(Boolean)
        )
    ]

    const filteredJobs = jobs.filter((job) => {

        const title = job.title || ""
        const company = job.company || ""
        const city = job.city || ""

        const searchText = search.toLowerCase()

        const matchesSearch =
            title.toLowerCase().includes(searchText) ||
            company.toLowerCase().includes(searchText) ||
            city.toLowerCase().includes(searchText)

        const matchesLocation =
            location === "All" || city === location

        return matchesSearch && matchesLocation
    })

    if (loading) {
        return <h2>Loading jobs...</h2>
    }

    if (error) {
        return (
            <div>

                <h2>{error}</h2>

                <button onClick={() => window.location.reload()}>
                    Try Again
                </button>

            </div>
        )
    }

    return (
        <div className="jobs-page">

            <h1>Available Jobs</h1>

            <div className="job-filters">

                <input
                    className="job-search"
                    type="text"
                    placeholder="Search by job title, company or location"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <select
                    className="job-location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                >

                    {locations.map((city) => (

                        <option
                            key={city}
                            value={city}
                        >
                            {city === "All"
                                ? "All Locations"
                                : city}
                        </option>

                    ))}

                </select>

            </div>

            {filteredJobs.length === 0 ? (

                <h2>No jobs found</h2>

            ) : (

                <div className="jobs-list">

                    {filteredJobs.map((job) => (

                        <JobCard
                            key={job.id}
                            id={job.id}
                            title={job.title}
                            company={job.company}
                            location={job.city}
                            salary={
                                job.salary_min
                                    ? `${job.salary_min}${job.salary_max ? ` - ${job.salary_max}` : ""} ${job.salary_currency || ""} / ${job.salary_period || ""}`
                                    : "Not specified"
                            }
                            onSave={handleSave}
                        />

                    ))}

                </div>

            )}

        </div>
    )
}

export default Jobs