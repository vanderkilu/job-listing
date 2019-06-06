import { JOBS_ADD } from '../actionTypes'

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


function jobsReducer(state = INITIAL_JOBS, action) {
    switch(action.type) {
        case JOBS_ADD: {
            return applyJobsAdd(state, action)
        }
        default: return state

    }
}

export default jobsReducer