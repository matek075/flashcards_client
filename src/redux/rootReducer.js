import {combineReducers} from 'redux'
import sessionReducer from './reducers/session'

const rootReducer = combineReducers({
    session: sessionReducer
})

export default rootReducer