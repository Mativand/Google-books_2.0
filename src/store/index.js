import {applyMiddleware, combineReducers, createStore} from 'redux'
import {dataSearchReducer} from "./dataSearchReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {dataResultReducer} from "./dataResultReducer";

const rootReducer = combineReducers({
    search: dataSearchReducer,
    result: dataResultReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))