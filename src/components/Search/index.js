import React from 'react'
import './index.css'
import searchIcon from './search.svg'

function Search() {
    return (
        <div className="search">
            <form className="search__form">
                <input className="search__input" placeholder="search by name or tag"/>
                <button className="btn" type="submit">
                    <img src={searchIcon}  alt="search icon" className="search__icon"/>
                </button>
            </form>
        </div>
    )
}

export default Search