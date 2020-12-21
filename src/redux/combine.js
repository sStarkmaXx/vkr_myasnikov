import { combineReducers } from "redux";
import catalogReducer from './reducers/catalog-reducer';

const allReducers = combineReducers({
    catalog: catalogReducer
})

export default allReducers;