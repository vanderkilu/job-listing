import React from 'react'
import './index.css'
import remote from './remote.svg'

function Welcome() {
    return (
        <div className="welcome">
            <h3 className="welcome__logo">JOBILY</h3>
            <img src={remote} className="welcome__img" alt="remote"/>
            <h1 className="welcome__text">Curated jobs just for you </h1>
            <p className="welcome__text-small">Jobs are based on the github jobs api</p>
        </div>
    )
}

export default Welcome