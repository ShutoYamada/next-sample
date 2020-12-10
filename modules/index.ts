import { createStore, combineReducers } from 'redux'
import { Action, createAction, handleActions } from 'redux-actions';

import {CounterState, CounterReducer} from './counter';

export type State = {
    counter: CounterState;
};

export const initialState : State = {
    counter: new CounterState(),
}

const reducer = combineReducers<State>({
    counter: CounterReducer
})


export const initializeStore = (initialStateValue : State = initialState) => {
  return createStore(
    reducer,
    initialState,
  )
}

export const store = createStore(
    reducer,
    initialState,
  );