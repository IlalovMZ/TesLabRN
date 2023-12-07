import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import { Reducer } from './reducer'

const middlewares = [thunk]

const store = createStore(Reducer, applyMiddleware(...middlewares))

export type State = ReturnType<typeof store.getState>

export default store
