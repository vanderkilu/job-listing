import React from 'react'
import './index.css'
import remote from './remote.svg'

function Welcome() {
    return (
        <div className="welcome">
            <img src={remote} className="welcome__img" alt="remote"/>
            <p className="welcome__text">Remote Jobs For You based on the Github Api </p>
        </div>
    )
}

export default Welcome