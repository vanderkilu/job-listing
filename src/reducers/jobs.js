import { JOBS_ADD, 
         JOBS_LOADING, 
         JOBS_FETCH_ERROR,
         MORE_JOBS,
         CURRENT_FILTER,
         CURRENT_JOB
         } 
from '../actionTypes'

const INITIAL_JOBS = []

const applyJobsAdd = (state, action) => {
    return  action.jobs
}
const applyAddMoreJobs = (state, action) => {
    return [...state, ...action.jobs]
}


export function jobsReducer(state = INITIAL_JOBS, action) {
    switch(action.type) {
        case JOBS_ADD: {
            return applyJobsAdd(state, action)
        }
        case MORE_JOBS: {
            return applyAddMoreJobs(state, action)
        }
        default: return state

    }
}

export function jobsIsLoadingReducer(state=false, action) {
    switch(action.type) {
        case JOBS_LOADING: {
            return action.isLoading
        }
        default: return state
    }
} 

export function jobsFetchErrorReducer(state=false, action) {
    switch(action.type) {
        case JOBS_FETCH_ERROR: {
            return action.isError
        }
        default: return state
    }
}

export function setCurrentFilterReducer(state={name: '', type: ''}, action) {
    switch(action.type) {
        case CURRENT_FILTER: {
            return action.filter
        }
        default: return state
    }
}

export function getJobReducer(state={}, action) {
    switch(action.type) {
        case CURRENT_JOB: {
            return action.job
        }
        default: return state
    }
}