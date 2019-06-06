import { combineReducers } from 'redux'
import jobsReducer from './jobs'

const rootReducer = combineReducers({
    jobState: jobsReducer,
})

export default rootReducer