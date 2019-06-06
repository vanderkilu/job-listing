import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/root'

export default function configureStore() {
   return createStore(
        rootReducer,
        undefined,
        applyMiddleware(thunk)
    )
}
