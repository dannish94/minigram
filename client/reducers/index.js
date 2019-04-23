import { combineReducers } from 'redux';
import { routeReducers } from 'react-router-redux';
import { posts } from './posts';
import { comments } from './comments';

const rootReducer = combineReducers({posts, comments, routing: routeReducers})

export default rootReducer;