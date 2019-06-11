import React from 'react'
import './index.css'
import { formatTime } from '../../utils'

function Job({job}) {
    return (
        <div className="job">
            <p className="job__company">{job.company}</p>
            <p className="job__role">{job.title}</p>
            <p className="job__location">{job.location}</p>
            <p className="job__type">{job.type}</p>
            <p className="job__time"> {formatTime(new Date(job.created_at)) }</p>
        </div>
    )
}

export default Job