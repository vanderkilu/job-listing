import React from 'react'
import './index.css'
import searchIcon from './search.svg'

function Search() {
    const mapSearchArrToItems = (arr) => {
        return arr.map(lang => {
            return <span className="top-search__item">{lang}</span>
        })
    }
    const langSearch = ['Javascript', 'Php','Python', 'Rails', 'Linux', 'Erlang']
    const locationSearch = ['San Francisco', 'New York', 'Austin', 'London', 'Europe']
    const topSearchLang = mapSearchArrToItems(langSearch)
    const topLocationSearch = mapSearchArrToItems(locationSearch)
    return (
        <div className="search">
            <form className="search__form">
                <input className="search__input" placeholder="search by name or tag"/>
                <button className="btn" type="submit">
                    <img src={searchIcon}  alt="search icon" className="search__icon"/>
                </button>
            </form>
            <div className="search__filters">
                <h3 className="search__filters-text"> Trending Searches </h3>
                <div className="top-search">
                    {topSearchLang}
                    {topLocationSearch}
                </div>
            </div>
        </div>
    )
}

export default Search