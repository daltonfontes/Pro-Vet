import { combineReducers } from 'redux';

import animals from './animals';
import user from './user';

export default combineReducers({
    animals,
    user
})