import { combineReducers } from "redux";
import postsReducer from './reducers/posts-reducer';
import catalogReducer from './reducers/catalog-reducer';
import basketItemReducer from './reducers/basketItem-reducer';

const allReducers = combineReducers({
    catalog: catalogReducer,
    posts: postsReducer,
    basket: basketItemReducer
})

export default allReducers;