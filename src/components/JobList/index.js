import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import Job from '../Job'
import Loader from '../Loader'
import {fetchJobs} from '../../actions'

class JobList extends React.Component {
    componentDidMount() {
        const corsUrl = 'https://cors-anywhere.herokuapp.com/'
        const baseUrl = `${corsUrl}https://jobs.github.com/positions.json`
        this.props.getJobs(baseUrl)
    }
    render() {
        const jobList = this.props.jobs.map(job => <Job key={job.id} job={job} /> )
        const loader = this.props.isJobsLoading ? <Loader/> : null
        return (
            <div className="job-list">
                <h3 className="job-list__text">Top Jobs</h3>
                {loader}
                <div className="job-listing">
                    {jobList}
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        isJobsLoading: state.jobsIsLoading,
        hasErrored: state.jobsFetchError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJobs: (url) => dispatch(fetchJobs(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList)