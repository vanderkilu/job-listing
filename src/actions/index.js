import { JOBS_ADD } from '../actionTypes'

function addJobs(jobs) {
    return {
        type: JOBS_ADD,
        jobs,
    }
}

export {
    addJobs,
}