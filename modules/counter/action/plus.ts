import { Action, createAction, ActionFunction0 } from 'redux-actions';
import { actionType } from '../const';

const PlusAction: ActionFunction0<Action<void>> = createAction(
    actionType.Plus,
);

export default PlusAction;