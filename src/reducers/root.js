import { combineReducers } from 'redux'
import {jobsReducer, 
        getJobReducer,
        jobsIsLoadingReducer, 
        jobsFetchErrorReducer,
        setCurrentFilterReducer } 
from './jobs'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    job: getJobReducer,
    jobsFetchError: jobsFetchErrorReducer,
    jobsIsLoading: jobsIsLoadingReducer,
    currentFilter: setCurrentFilterReducer
})

export default rootReducer