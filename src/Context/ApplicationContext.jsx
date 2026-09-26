import { createContext, useState } from "react"

export const ApplicationContext = createContext()

function ApplicationProvider({ children }) {

    const [applications, setApplications] = useState([])

    const applyForJob = (job) => {

        setApplications((previousApplications) => [
            ...previousApplications,
            job
        ])
    }
    return (
        <ApplicationContext.Provider
            value={{
                applications,
                applyForJob
            }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationProvider