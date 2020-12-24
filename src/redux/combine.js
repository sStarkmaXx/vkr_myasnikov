import { combineReducers } from "redux";
import catalogReducer from './reducers/catalog-reducer';
import selectItemReducer from './reducers/selectItem-reducer';

const allReducers = combineReducers({
    catalog: catalogReducer,
    itemInfo: selectItemReducer
})

export default allReducers;