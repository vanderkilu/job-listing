import { JOBS_ADD, 
         JOBS_LOADING, 
         JOBS_FETCH_ERROR } 
from '../actionTypes'

const INITIAL_JOBS = [
    {
        role: 'Frontend',
        company: 'Google Inc',
        skill: 'Javascript',
        date: '21st July, 2018'
    }
]

const applyJobsAdd = (state, action) => {
    return [...state, action.jobs]
}


export function jobsReducer(state = INITIAL_JOBS, action) {
    switch(action.type) {
        case JOBS_ADD: {
            return applyJobsAdd(state, action)
        }
        default: return state

    }
}

export function jobsIsLoading(state=false, action) {
    switch(action.type) {
        case JOBS_LOADING: {
            return action.isLoading
        }
        default: return state
    }
} 

export function jobsFetchError(state=false, action) {
    switch(action.type) {
        case JOBS_FETCH_ERROR: {
            return action.isError
        }
        default: return state
    }
}