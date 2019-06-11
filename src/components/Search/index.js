import React from 'react'
import './index.css'
import searchIcon from './search.svg'
import { connect } from 'react-redux'
import {fetchJobs} from '../../actions'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            langSearch: ['Javascript', 
                        'Php',
                        'Python', 
                        'Docker', 
                        'Linux', 
                        'Erlang'
                        ],
            locationSearch:  ['San Francisco', 
                              'New York', 
                              'Austin',  
                              'Europe',
                              'Remote'
                            ] ,
            query: ''
        }
    }
    mapSearchArrToItems(arr, type) {
        return arr.map(item => {
            return <span className="top-search__item" key={item}
                    onClick={()=> { this.props.filterSearch(item, type) }}>
                        {item}
                    </span>
        })
    }
    handleChange(e) {
        this.setState({
            query: e.target.value
        })
    }
    handleSubmit(e) {
        if(this.state.query)
            this.props.search(this.state.query)
        this.setState({
            query: ' '
        })
        e.preventDefault()
        
    }

    render() {
        const topSearchLang = this.mapSearchArrToItems(this.state.langSearch, 'lang')
        const topLocationSearch = this.mapSearchArrToItems(this.state.locationSearch, 'location')
        return (
            <div className="search">
                <form className="search__form" onSubmit={(e)=> this.handleSubmit(e)}>
                    <input className="search__input" 
                           placeholder="search by job title, benefits, company"
                           value={this.state.query}
                           onChange= {(e)=> this.handleChange(e) }/>
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
}

const mapDispatchToProps = (dispatch) => {
    const corsUrl = 'https://cors-anywhere.herokuapp.com/'
    const baseUrl = `${corsUrl}https://jobs.github.com/positions.json`
    return {
        filterSearch: (query, type) => {
            const url = type === 'lang' ? 
                    `${baseUrl}?description=${query}`
                    :`${baseUrl}?location=${query}`
            return dispatch(fetchJobs(url))
        },
        search: (query)=> {
            const url = `${baseUrl}?description=${query}`
            return dispatch(fetchJobs(url))
        }
    }
}

export default connect(null, mapDispatchToProps)(Search)