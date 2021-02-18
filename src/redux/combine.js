import { combineReducers } from "redux";
import itemInfoReducer from './reducers/itemInfo-reducer';
import selectItemReducer from './reducers/selectItem-reducer';
import basketItemReducer from './reducers/basketItem-reducer';

const allReducers = combineReducers({
    cardsPage: selectItemReducer,
    itemInfoPage: itemInfoReducer,
    basketPage: basketItemReducer
})

export default allReducers;