import { combineReducers } from 'redux'
import {jobsReducer, 
        jobsIsLoadingReducer, 
        jobsFetchErrorReducer } 
from './jobs'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    jobsFetchError: jobsFetchErrorReducer,
    jobsIsLoading: jobsIsLoadingReducer
})

export default rootReducer