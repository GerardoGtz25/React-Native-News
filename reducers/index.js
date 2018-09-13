import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import news from './news';


const reducer = combineReducers({
  news,
  navigation
})


export default reducer;
