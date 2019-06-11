import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import Job from '../Job'
import Loader from '../Loader'
import {fetchJobs, fetchMoreJobs} from '../../actions'
import { baseUrl } from '../../utils'

class JobList extends React.Component {
    componentDidMount() {
        this.props.getJobs(baseUrl)
    }
    loadMore() {
        let url
        const pageNum = Math.ceil(this.props.jobs.length / 50.0) + 1
        const currentFilter = this.props.currentFilter
        if (currentFilter.type === 'description') {
            url = `${baseUrl}?description=${currentFilter.name}&page=${pageNum}`
        }
        else if (currentFilter.type === 'location') {
            url = `${baseUrl}?location=${currentFilter.name}&page=${pageNum}`
        }
        else {
            url = `${baseUrl}?page=${pageNum}`
        }
        this.props.getMoreJobs(url)
    }
    render() {
        const jobs = this.props.jobs
        const jobList = jobs.map(job => <Job key={job.id} job={job} /> )
        const loader = this.props.isJobsLoading ? <Loader/> : null
        const canLoadMore = (jobs.length > 0) && (jobs.length % 50 === 0)

        return (
            <div className="job-list">
                <h3 className="job-list__text">Top Jobs</h3>
                {loader}
                <div className="job-listing">
                    {jobList}
                    {canLoadMore && 
                        <button className="load-more" onClick={()=> this.loadMore()}>
                            More Jobs
                        </button>
                    }
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        isJobsLoading: state.jobsIsLoading,
        hasErrored: state.jobsFetchError,
        currentFilter: state.currentFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJobs: (url) => dispatch(fetchJobs(url)),
        getMoreJobs: (url) => dispatch(fetchMoreJobs(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList)