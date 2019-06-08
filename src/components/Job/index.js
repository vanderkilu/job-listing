import React from 'react'
import './index.css'

function Job() {
    return (
        <div className="job">
            <h3 className="job__company">Google</h3>
            <p className="job__role">Frontend Engineer</p>
            <img src="" className="job__image" alt="company icon"/>
            <p className="job__type">Full Time</p>
            <p className="job__time"> 2days ago </p>
        </div>
    )
}

export default Job