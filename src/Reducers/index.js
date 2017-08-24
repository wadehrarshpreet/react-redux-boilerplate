import { combineReducers } from 'redux';
import Sample from './sample_reducer';
const rootReducer = combineReducers({
  sample:Sample
});

export default rootReducer;
