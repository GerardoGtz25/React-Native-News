import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import news from './news';
import login from './login';


const reducer = combineReducers({
  news,
  navigation,
  login
})


export default reducer;
