import React from 'react'
import Search from '../Search'
import JobList from '../JobList'
import remote from './remote.svg'
import './index.css'

function Home() {
    return (
        <div className="home">
            <div className="welcome">
                <img src={remote} className="welcome__img" alt="remote"/>
                <h1 className="welcome__text">Curated jobs just for you </h1>
                <p className="welcome__text-small">Jobs are based on the github jobs api</p>
            </div>
            <Search/>
            <JobList/>
        </div>
    )
}

export default Home