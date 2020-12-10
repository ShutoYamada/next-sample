import State, {initialState} from '../state';
import {handleAction, ReduxCompatibleReducer} from 'redux-actions';
import {MinusAction} from '../action';

const reducer : ReduxCompatibleReducer<State, void> = handleAction<State, void>(
    MinusAction.toString(),
    (state) => ({
        ...state,
        counter: state.counter - 1
    })
, initialState);

export default reducer;