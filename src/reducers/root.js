import { combineReducers } from 'redux'
import {jobsReducer, 
        jobsIsLoading, 
        jobsFetchError } 
from './jobs'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    jobsFetchError,
    jobsIsLoading
})

export default rootReducer