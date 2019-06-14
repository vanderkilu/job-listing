import React from 'react'
import Welcome from '../Welcome'
import Search from '../Search'
import JobList from '../JobList'

function Home() {
    return (
        <div className="home">
            <Welcome />
            <Search/>
            <JobList/>
        </div>
    )
}

export default Home