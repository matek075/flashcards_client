import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

window.store = store

export default store


// export default createStore(rootReducer, composeWithDevTools)
