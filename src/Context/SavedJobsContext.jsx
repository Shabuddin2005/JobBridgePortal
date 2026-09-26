import { createContext, useState } from "react"

export const SavedJobsContext = createContext()

function SavedJobsProvider({ children }) {

    const [savedJobs, setSavedJobs] = useState([])

    const handleSave = (id) => {

    if (!savedJobs.includes(id)) {
        setSavedJobs([...savedJobs, id])
    }

}

    const handleRemove = (id) => {
        setSavedJobs(savedJobs.filter((jobId) => jobId !== id))
    }

    return (
        <SavedJobsContext.Provider value={{ savedJobs, handleSave, handleRemove}}>
            {children}
        </SavedJobsContext.Provider>
    )
}

export default SavedJobsProvider