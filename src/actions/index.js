import { JOBS_ADD, 
         JOBS_FETCH_ERROR, 
         JOBS_LOADING,
         MORE_JOBS
} from '../actionTypes'

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
function getJobs(url, fn) {
    return (dispatch) => {
        dispatch(jobsIsLoading(true))
        fetch(url,  {
            headers: {
          }})
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            dispatch(jobsIsLoading(false))
            return response
        })
        .then((response) => response.json())
        .then(jobs => dispatch(fn(jobs)))
        .catch(()=> dispatch(jobsFetchError(true)))
    }
}
function fetchJobs(url) {
   return getJobs(url, addJobs)
}
function fetchMoreJobs(url) {
    return getJobs(url, addMoreJobs)
}
function addMoreJobs(jobs) {
    return {
        type: MORE_JOBS,
        jobs
    }
}


export {
    fetchJobs,
    fetchMoreJobs
}