import State, {initialState} from '../state';
import {handleAction, ReduxCompatibleReducer} from 'redux-actions';
import {PlusAction} from '../action';

const reducer : ReduxCompatibleReducer<State, void> = handleAction<State, void>(
    PlusAction.toString(),
    (state) => ({
        ...state,
        counter: state.counter + 1
    })
, initialState);

export default reducer;