import { Action, createAction, ActionFunction0 } from 'redux-actions';
import { actionType } from '../const';

const MinusAction: ActionFunction0<Action<void>> = createAction(
    actionType.Minus,
);

export default MinusAction;