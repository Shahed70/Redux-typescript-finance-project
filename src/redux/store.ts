import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import bankReducer from './Reducers/bankReducer'


const rootReducer = combineReducers({
    bank:bankReducer,
    
})


const store = createStore(rootReducer,{}, applyMiddleware(thunk))


export default store