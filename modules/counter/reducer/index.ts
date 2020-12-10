import {reduceReducers} from '../../../lib/redux-actions-custom';
import PlusReducer from './plus';
import MinusReducer from './minus';

const all = reduceReducers([PlusReducer, MinusReducer]);
export default all;