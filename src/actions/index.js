import { JOBS_ADD, 
         JOBS_FETCH_ERROR, 
         JOBS_LOADING,
         MORE_JOBS,
         CURRENT_FILTER,
         CURRENT_JOB 
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
function setCurrentFilter(filter) {
    return {
        type: CURRENT_FILTER,
        filter
    }
}
function setJob(job) {
    return {
        type: CURRENT_JOB,
        job
    }
}
function getJob(url, dispatch){
    return fetch(url,{
        headers: {
      }})
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response
     })
     .then(response => response.json())
     .then(job => dispatch(setJob(job)))
     .catch(err => console.log(err))
}
/** 
 * search for job in store,
 * make a call to get it from server if not 
 * currently in the store
 */
function fetchJob(id, url) {
    return (dispatch, getState)=> {
        const state = getState()
        const job = state.jobs.find(job => job.id === id)
        if (job) {
            return dispatch(setJob(job))
        }
        return getJob(url, dispatch)
    }
}


export {
    fetchJobs,
    fetchMoreJobs,
    setCurrentFilter,
    fetchJob
}