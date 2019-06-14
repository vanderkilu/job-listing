import React from 'react'
import {connect} from 'react-redux'
import {fetchJob} from '../../actions'


class JobDetail extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id
        const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const url = `${corsProxyUrl}https://jobs.github.com/positions/${id}.json`
        this.props.getJob(id, url)
    }
    render() {
        console.log(this.props.job)
        return (
            <div className="job-detail">
                <p>Job Detail</p>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        job: state.job
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        getJob: (id, url) => dispatch(fetchJob(id,url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail) 