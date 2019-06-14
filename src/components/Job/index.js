import React from 'react'
import './index.css'
import {withRouter} from 'react-router-dom'
import { formatTime } from '../../utils'

function Job({job, history}) {
    return (
        <div className="job" onClick={()=> { history.push(`/jobs/${job.id}`) }}>
            <p className="job__company">{job.company}</p>
            <p className="job__role">{job.title}</p>
            <p className="job__location">{job.location}</p>
            <p className="job__type">{job.type}</p>
            <p className="job__time"> {formatTime(new Date(job.created_at)) }</p>
        </div>
    )
}

export default withRouter(Job)