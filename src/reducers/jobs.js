import { JOBS_ADD, 
         JOBS_LOADING, 
         JOBS_FETCH_ERROR } 
from '../actionTypes'

const INITIAL_JOBS = []

const applyJobsAdd = (state, action) => {
    return  action.jobs
}


export function jobsReducer(state = INITIAL_JOBS, action) {
    switch(action.type) {
        case JOBS_ADD: {
            return applyJobsAdd(state, action)
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