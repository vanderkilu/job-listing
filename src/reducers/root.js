import { combineReducers } from 'redux'
import {jobsReducer, 
        jobsIsLoadingReducer, 
        jobsFetchErrorReducer,
        setCurrentFilterReducer } 
from './jobs'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    jobsFetchError: jobsFetchErrorReducer,
    jobsIsLoading: jobsIsLoadingReducer,
    currentFilter: setCurrentFilterReducer
})

export default rootReducer