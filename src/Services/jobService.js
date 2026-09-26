const API_URL =
    "https://api.jobopportunitiesapi.org/public/jobs?country=IN&has_salary=any"

export const getJobs = async () => {

    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error("Failed to fetch jobs")
    }

    const result = await response.json()

    return result.data
}


export const getJobById = async (id) => {

    const response = await fetch(
        `https://api.jobopportunitiesapi.org/public/jobs/${id}`
    )

    if (!response.ok) {
        throw new Error("Job not found")
    }

    const result = await response.json()

    return result.data
}