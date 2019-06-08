import React from 'react'
import './index.css'
import Job from '../Job'

function JobList() {
    const jobs = [1,2,3,4,5]
    const jobList = jobs.map(job => <Job key={job} /> )
    return (
        <div className="job-list">
            <h3 className="job-list__text">Top Jobs</h3>
            <div className="job-listing">
                {jobList}
            </div>
        </div>
    )
}

export default JobList