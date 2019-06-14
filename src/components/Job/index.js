import React from 'react'
import './index.css'
import {withRouter} from 'react-router-dom'
import { formatTime, isOld } from '../../utils'

function Job({job, history}) {
    const timeAgo = formatTime(new Date(job.created_at))
    const isLessThanAday = isOld(job.created_at) ? 'job' : 'job hot'

    return (
        <div className={isLessThanAday} onClick={()=> { history.push(`/jobs/${job.id}`) }}>
            <p className="job__company">{job.company}</p>
            <p className="job__role">{job.title}</p>
            <p className="job__location">{job.location}</p>
            <p className="job__type">{job.type}</p>
            <p className="job__time"> { timeAgo }</p>
        </div>
    )
}

export default withRouter(Job)