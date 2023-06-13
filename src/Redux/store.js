
import  {  applyMiddleware, combineReducers, legacy_createStore } from "redux"

import thunk from "redux-thunk"
import { Reducer } from "./EventsReducer/Reducer"

const All_Reducers = combineReducers({Reducer})


const store = legacy_createStore(All_Reducers,applyMiddleware(thunk))

export {store}