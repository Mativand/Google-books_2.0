import {combineReducers, createStore} from 'redux'
import {sortReducer} from "./sortReducer";


const rootReducer = combineReducers({
    sort: sortReducer,
})

export const store = createStore(rootReducer)