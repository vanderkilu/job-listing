import { combineReducers } from 'redux'
import {jobsReducer, 
        jobsIsLoading, 
        jobsFetchError } 
from './jobs'

const rootReducer = combineReducers({
    jobState: jobsReducer,
    jobsFetchError,
    jobsIsLoading
})

export default rootReducer