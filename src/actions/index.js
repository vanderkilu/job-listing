import { JOBS_ADD, 
         JOBS_FETCH_ERROR, 
         JOBS_LOADING
} from '../actionTypes'
import { jobsIsLoading } from '../reducers/jobs';

function addJobs(jobs) {
    return {
        type: JOBS_ADD,
        jobs,
    }
}
function jobsIsLoading(bool) {
    return {
        type: JOBS_LOADING,
        isLoading: bool
    }
}
function jobsFetchError(bool) {
    return {
        type: JOBS_FETCH_ERROR,
        isError: bool
    }
}
function fetchJobs(url) {
    return (dispatch) => {
        dispatch(jobsIsLoading(true))
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            dispatch(jobsIsLoading(false))
            return response
        })
        .then((response) => response.json())
        .then(jobs => dispatch(addJobs(jobs)))
        .catch(()=> dispatch(jobsFetchError(true)))
    }
}


export {
    fetchJobs
}