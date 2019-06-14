import React from 'react'

function JobDetail({match}) {
    return (
        <div className="job-detail">
            <p>Job Detail {match.params.id} </p>
        </div>
    )
}

export default JobDetail 